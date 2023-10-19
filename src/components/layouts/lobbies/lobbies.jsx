import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../../molecules/modal/modal'
import { collection, addDoc, doc, updateDoc, writeBatch, arrayRemove, where, getDoc, query, getDocs, arrayUnion } from 'firebase/firestore'
import { db, auth } from '../../../main'
import { toast, ToastContainer } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid'
import 'react-toastify/dist/ReactToastify.css'

const Lobbies = () => {
  const [joinModalVisible, setJoinModalVisible] = useState(false)
  const [inputLobbyCode, setInputLobbyCode] = useState('')
  const [createModalVisible, setCreateModalVisible] = useState(false)
  const [lobbyName, setLobbyName] = useState('')
  const [joinedLobbies, setJoinedLobbies] = useState([])

  const fetchLobbiesByIds = async (lobbyIds) => {
    try {
      const lobbies = []
      for (const id of lobbyIds) {
        const docRef = doc(db, 'lobbies', id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          lobbies.push({ ...docSnap.data(), id: docSnap.id })
        } else {
          console.log(`No lobby found with id: ${id}`)
        }
      }
      return lobbies
    } catch (error) {
      console.error('Error fetching lobbies by IDs: ', error)
      return []
    }
  }

  useEffect(() => {
    const fetchJoinedLobbies = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDocData = (await getCurrentUserDoc()).data();
          const userLobbiesData = userDocData.joinedLobbies || [];
          const userLobbies = await fetchLobbiesByIds(userLobbiesData.map(lobbyData => lobbyData.lobbyId));
          setJoinedLobbies(userLobbies);
        }
      } catch (error) {
        console.error('Error fetching lobbies: ', error);
      }
    };

    fetchJoinedLobbies();
  }, []);

  const deleteLobby = async (lobby) => {
    if (!window.confirm('Are you sure you want to leave this lobby?')) return

    try {
      const user = auth.currentUser
      setJoinedLobbies(joinedLobbies.filter(l => l.id !== lobby.id))
      const userDocRef = await getCurrentUserDocRef()

      await updateDoc(userDocRef, {
        joinedLobbies: arrayRemove({ lobbyId: lobby.id, sheetId: lobby.sheetId || '' })
      })

      const lobbyRef = doc(db, 'lobbies', lobby.id)

      if (user && lobby.creator === user.email) {
        const batch = writeBatch(db)
        batch.delete(lobbyRef)

        // TODO: This will be bad for performance if there are many users (thousands, so we are good for now)
        const allUsersSnapshot = await getDocs(collection(db, 'users'))
        allUsersSnapshot.forEach(async (userDoc) => {
          if (userDoc.data().joinedLobbies) {
            const lobbyIndex = userDoc.data().joinedLobbies.findIndex(l => l.lobbyId === lobby.id);
            if (lobbyIndex !== -1) {
              const updatedLobbies = userDoc.data().joinedLobbies.filter((l, index) => index !== lobbyIndex);
              batch.update(doc(db, 'users', userDoc.id), { joinedLobbies: updatedLobbies });
            }
          }
        })

        await batch.commit()
        toast.success('Lobby deleted successfully!')
      } else {
        await updateDoc(lobbyRef, {
          joinedUsers: arrayRemove(userDocRef.id),
        });

        toast.success('Lobby left successfully!')
      }
    } catch (error) {
      toast.error('Error deleting lobby: ', error)
      console.log('Error deleting lobby: ', error)
    }
  }

  const getCurrentUserDoc = async () => {
    const user = auth.currentUser
    const userEmail = user.email
    const usersCollection = collection(db, 'users')
    return (await getDocs(query(usersCollection, where('email', '==', userEmail)))).docs[0]
  }

  const getCurrentUserDocRef = async () => {
    const user = auth.currentUser
    const userEmail = user.email
    const usersCollection = collection(db, 'users')
    const q = query(usersCollection, where('email', '==', userEmail))
    return (await getDocs(q)).docs[0].ref
  }

  const openCreateModal = () => {
    setCreateModalVisible(true)
  }

  const closeCreateModal = () => {
    setCreateModalVisible(false)
    setLobbyName('')
  }

  const openJoinModal = () => {
    setJoinModalVisible(true)
  }

  const closeJoinModal = () => {
    setJoinModalVisible(false)
    setInputLobbyCode('')
  }

  const createLobby = async () => {
    if (!lobbyName.trim()) {
      toast.error('Lobby name cannot be empty!')
      return
    }

    try {
      const user = auth.currentUser

      if (!user) {
        toast.error('You must be logged in to create a lobby')
        throw new Error('User must be logged in to create a lobby')
      }

      const newLobby = {
        code: uuidv4().substring(0, 8),
        name: lobbyName.trim(),
        creator: user.email,
        type: 'custom'
      }

      const userDocRef = await getCurrentUserDocRef();
      const lobbyDocRef = await addDoc(collection(db, 'lobbies'), newLobby)
      const newLobbyEntry = { lobbyId: lobbyDocRef.id, sheetId: '' };

      await updateDoc(userDocRef, {
        joinedLobbies: arrayUnion(newLobbyEntry)
      });

      await updateDoc(lobbyDocRef, {
        joinedUsers: arrayUnion(userDocRef.id)
      });

      setJoinedLobbies([...joinedLobbies, { ...newLobby, id: lobbyDocRef.id }]);
      toast.success('Lobby created successfully!')
      closeCreateModal()
    } catch (e) {
      toast.error('Error adding lobby: ', e)
      console.log('Error adding lobby: ', e)
    }
  }

  const joinLobby = async () => {
    try {
      const lobbyQuery = query(collection(db, 'lobbies'), where('code', '==', inputLobbyCode.trim()))
      const querySnapshot = await getDocs(lobbyQuery)

      if (querySnapshot.empty) {
        toast.error('No lobby exists with the provided code.')
        return
      }

      const lobbyToJoin = querySnapshot.docs[0].data()
      const lobbyId = querySnapshot.docs[0].id

      const userDocRef = await getCurrentUserDocRef()
      const userDoc = await getDoc(userDocRef)
      const userData = userDoc.data()

      if (userData.joinedLobbies.includes(lobbyId)) {
        toast.info('You are already in this lobby.')
        return
      }

      await updateDoc(userDocRef, {
        joinedLobbies: arrayUnion({lobbyId: lobbyId, sheetId: ''})
      })

      const lobbyDocRef = doc(db, 'lobbies', lobbyId);
      await updateDoc(lobbyDocRef, {
        joinedUsers: arrayUnion(userDocRef.id)
      });

      setJoinedLobbies([...joinedLobbies, { ...lobbyToJoin, id: lobbyId }])
      toast.success('Joined the lobby successfully!')
      closeJoinModal()
    } catch (error) {
      toast.error('Error joining lobby: ', error)
      console.log('Error joining lobby: ', error)
    }
  }

  return (
    <div className="card-body">
      <div className="flex lobbies-buttons gap-1">
        <button onClick={openCreateModal} className="btn btn-primary">Create Lobby</button>
        <button onClick={openJoinModal} className="btn btn-secondary">Join Lobby</button>
        <div className="lg:tooltip tooltip-error" data-tip="Not defined">
          <Link to="" className="btn">View Character Sheets</Link>
        </div>
      </div>
      <h2 className="card-title">Your lobbies:</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Code</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {joinedLobbies.map((lobby, index) => (
              <tr key={lobby.id || index} className='hover:bg-gray-100'>
                <td>{lobby.name}</td>
                <td>{lobby.code}</td>
                <td>
                  <button onClick={() => deleteLobby(lobby)}>
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        show={createModalVisible}
        title="Create a Lobby"
        handleClose={closeCreateModal}
        handleAction={createLobby}
        textValue={lobbyName}
        setTextValue={setLobbyName}
        actionButtonText="Create"
        cancelButtonText="Cancel"
        placeholder="Name"
      />

      <Modal
        show={joinModalVisible}
        title="Join lobby"
        handleClose={closeJoinModal}
        handleAction={joinLobby}
        textValue={inputLobbyCode}
        setTextValue={setInputLobbyCode}
        actionButtonText="Join"
        cancelButtonText="Cancel"
        placeholder="Code"
      />

      <ToastContainer />
    </div>
  )
}

export default Lobbies
