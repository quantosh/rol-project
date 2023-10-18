import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from './modal';
import { collection, addDoc, doc, updateDoc, deleteDoc, writeBatch, arrayRemove, where, setDoc, getDoc, query, getDocs, arrayUnion } from "firebase/firestore";
import { db } from '../main';
import { toast, ToastContainer } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { auth } from '../main'
import '../styles/lobbies.css';
import 'react-toastify/dist/ReactToastify.css';

const Lobbies = () => {
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [lobbyName, setLobbyName] = useState('');
  const [joinedLobbies, setJoinedLobbies] = useState([]);

  const fetchLobbiesByIds = async (lobbyIds) => {
    try {
      const lobbies = [];
      for (const id of lobbyIds) {
        const docRef = doc(db, "lobbies", id);
        const docSnap = await getDoc(docRef);
  
        if (docSnap.exists()) {
          lobbies.push({ ...docSnap.data(), id: docSnap.id });
        } else {
          console.log(`No lobby found with id: ${id}`);
        }
      }
      return lobbies;
    } catch (error) {
      console.error("Error fetching lobbies by IDs: ", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchJoinedLobbies = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDocData = (await getCurrentUserDoc()).data();
          const userLobbiesIds = userDocData.joinedLobbies || [];
          const userLobbies = await fetchLobbiesByIds(userLobbiesIds);
          setJoinedLobbies(userLobbies);
        }
      } catch (error) {
        console.error("Error fetching lobbies: ", error);
      }
    };

    fetchJoinedLobbies();
  }, []);

  const deleteLobby = async (lobby) => {
    if (!window.confirm("Are you sure you want to delete this lobby?")) return;

    try {
        const user = auth.currentUser;
        setJoinedLobbies(joinedLobbies.filter(l => l.id !== lobby.id));
        const userDocRef = await getCurrentUserDocRef();

        await updateDoc(userDocRef, {
          joinedLobbies: arrayRemove(lobby.id)
        });

      if (user && lobby.creator === user.email) {
        let batch = writeBatch(db);
        const lobbyRef = doc(db, "lobbies", lobby.id);
        batch.delete(lobbyRef);

        // TODO: This will be bad for performance if there are many users (thousands, so we are good for now)
        const allUsersSnapshot = await getDocs(collection(db, "users"));
        allUsersSnapshot.forEach(async (userDoc) => {
          const joinedLobbiesRef = doc(db, "users", userDoc.id, "joinedLobbies", lobby.id);
          const joinedLobbySnapshot = await getDoc(joinedLobbiesRef);
          if (joinedLobbySnapshot.exists()) {
            batch.delete(joinedLobbiesRef);
          }
        });

        await batch.commit();
        toast.success("Lobby deleted successfully!");
      }
      else {
        toast.success("Lobby left successfully!");
      }
    } catch (error) {
      toast.error("Error deleting lobby: ", error);
      console.log("Error deleting lobby: ", error);
    }
  };

  const getCurrentUserDoc = async () => {
    const user = auth.currentUser;
    const userEmail = user.email;
    const usersCollection = collection(db, "users");
    return (await getDocs(query(usersCollection, where("email", "==", userEmail)))).docs[0];
  };

  const getCurrentUserDocRef = async () => {
    const user = auth.currentUser;
    const userEmail = user.email;
    const usersCollection = collection(db, "users");
    const q = query(usersCollection, where("email", "==", userEmail));
    return (await getDocs(q)).docs[0].ref;
  };

  const openCreateModal = () => {
    setCreateModalVisible(true);
  };

  const closeCreateModal = () => {
    setCreateModalVisible(false);
    setLobbyName('');
  };

  const createLobby = async () => {
    if (!lobbyName.trim()) {
      toast.error("Lobby name cannot be empty!");
      return;
    }

    try {
      const user = auth.currentUser;

      if (!user) {
        toast.error("You must be logged in to create a lobby");
        throw new Error("User must be logged in to create a lobby");
      }
  
      const newLobby = {
        code: uuidv4().substring(0, 8),
        name: lobbyName.trim(),
        creator: user.email
      };
  
      const docRef = await addDoc(collection(db, "lobbies"), newLobby);
      await updateDoc(await getCurrentUserDocRef(), {
        joinedLobbies: arrayUnion(docRef.id)
      });

      setJoinedLobbies([...joinedLobbies, {...newLobby, id: docRef.id}]);
      toast.success("Lobby created successfully!");
      closeCreateModal();
    } catch (e) {
      toast.error("Error adding lobby: ", e);
      console.log("Error adding lobby: ", e);
    }
  };

  return (
    <div className="lobbies-container">
      <div className="lobbies-buttons">
        <button onClick={openCreateModal} className="retro-button">Create Lobby</button>
        <Link to="/join-lobby" className="retro-button">Join Lobby</Link>
        <Link to="/view-characters" className="retro-button">Create Character Sheet</Link>
        <Link to="/create-character" className="retro-button">View Character Sheets</Link>
      </div>

      <h2 className="lobbies-list-header">Your lobbies:</h2>
      <table className="lobbies-list">
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {joinedLobbies.map((lobby, index) => (
            <tr key={lobby.id || index}>
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

      <Modal
        show={createModalVisible}
        title="Create a Lobby"
        handleClose={closeCreateModal}
        handleAction={createLobby}
        textValue={lobbyName}
        setTextValue={setLobbyName}
        actionButtonText="Create"
        cancelButtonText="Cancel"
      />
      <ToastContainer />
    </div>
  );
};

export default Lobbies;
