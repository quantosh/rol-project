import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db, auth } from '../../../main';
import Modal from '../../molecules/modal/modal';

const Lobby = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lobby, setLobby] = useState(null);
  const [userSheets, setUserSheets] = useState([]);
  const [selectedSheet, setSelectedSheet] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchLobby = async () => {
      const docRef = doc(db, 'lobbies', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setLobby({ ...docSnap.data(), id: docSnap.id });
        if (!docSnap.data().sheetId) {
          setModalOpen(true);
          await fetchUserSheets();
        }
      } else {
        console.log('No such lobby!');
        navigate('/404');
      }
    };

    fetchLobby();
  }, [id, navigate]);

  const fetchUserSheets = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userSheetsData = await getDocs(query(collection(db, 'sheets'), where('userId', '==', user.uid)));
        setUserSheets(userSheetsData.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      }
    } catch (error) {
      console.error('Error fetching user sheets: ', error);
    }
  };

  const handleSheetSelect = async () => {
    if (selectedSheet !== "") {
      // Logic to assign the selected sheet to the lobby and close the modal
      // Here you'd also update the lobby in Firestore to include the sheetId
      setModalOpen(false);
    } else {
      alert('Please select a character sheet.');
    }
  };

  const createNewSheet = () => {
    // Since we can't close the modal without a selection, we navigate with the modal open
    // You might want to add logic here to handle this part better, e.g., setting a state to know a new sheet is being created
    navigate('/new-sheet'); // Adjust the route as needed
  };

  if (!lobby) return 'Loading...'; // Or any loading spinner

  return (
    <div>
      <h1>{lobby.name}</h1>
      <h2>Users in this lobby:</h2>
      {lobby.joinedUsers.map(user => (
        <p key={user}>{user}</p> // Adjust depending on how user data is stored
      ))}

      <Modal
        show={modalOpen}
        title="Select a Character Sheet"
        handleClose={() => {}} // Prevents the modal from being closed on clicking the close button or outside the modal
        handleAction={handleSheetSelect}
        actionButtonText="Select"
      >
        <select
          value={selectedSheet}
          onChange={(e) => setSelectedSheet(e.target.value)}
          disabled={userSheets.length === 0} // Disable select if no sheets available
        >
          <option value="">{userSheets.length === 0 ? "No character sheets available" : "Select a character sheet"}</option>
          {userSheets.map(sheet => (
            <option key={sheet.id} value={sheet.id}>{sheet.name}</option>
          ))}
        </select>
        <button onClick={createNewSheet}>Create New Sheet</button>
      </Modal>
    </div>
  );
};

export default Lobby;
