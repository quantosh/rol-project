import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from './modal';
import { collection, addDoc, doc, setDoc, onSnapshot } from "firebase/firestore"; 
import { db } from '../main';
import { toast, ToastContainer } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { auth } from '../main'
import '../styles/lobbies.css';
import 'react-toastify/dist/ReactToastify.css';

const Lobbies = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [lobbyName, setLobbyName] = useState('');
  const [joinedLobbies, setJoinedLobbies] = useState([]);

  useEffect(() => {
    const fetchJoinedLobbies = async () => {
      const user = auth.currentUser;

      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const joinedLobbiesCol = collection(userDocRef, "joinedLobbies");
        
        const unsubscribe = onSnapshot(joinedLobbiesCol, (snapshot) => {
          const updatedLobbies = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setJoinedLobbies(updatedLobbies);
        });

        return () => unsubscribe();
      }
    };

    fetchJoinedLobbies();
  }, []);


  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setLobbyName('');
  };

  const createLobby = async () => {
    if (!lobbyName.trim()) {
      toast.error("Lobby name cannot be empty!");
      return;
    }

    const newLobbyId = uuidv4();
    const newLobbyCode = uuidv4().substring(0, 8);

    const newLobby = {
      id: newLobbyId,
      code: newLobbyCode,
      name: lobbyName.trim()
    };
    
    try {
      const user = auth.currentUser;
      
      if (!user) {
        toast.error("You must be logged in to create a lobby");
        throw new Error("User must be logged in to create a lobby");
      }

      await addDoc(collection(db, "lobbies"), newLobby);
      const userDocRef = doc(db, "users", user.uid);
      const lobbyRef = doc(userDocRef, "joinedLobbies", newLobbyId);
      await setDoc(lobbyRef, newLobby);

      toast.success("Lobby created successfully!");
      closeModal();
    } catch (e) {
      toast.error("Error adding lobby: ", e);
      console.log("Error adding lobby: ", e);
    }

    setJoinedLobbies([...joinedLobbies, newLobby]);
    closeModal();
  };

  return (
    <div className="lobbies-container">
      <div className="lobbies-buttons">
        <button onClick={openModal} className="retro-button">Create Lobby</button>
        <Link to="/join-lobby" className="retro-button">Join Lobby</Link>
          <Link to="/view-characters" className="retro-button">Create Character Sheet</Link>
          <Link to="/create-character" className="retro-button">View Character Sheets</Link>
      </div>

      <h2 className="lobbies-list-header">Your Joined Lobbies:</h2>
      <ul className="lobbies-list">
        {joinedLobbies.map((lobby) => (
          <li key={lobby.id} className="lobbies-item">
            <span className="lobby-name">{lobby.name}</span> - <span className="lobby-code">{lobby.code}</span>
          </li>
        ))}
      </ul>
      
      <Modal 
        show={modalVisible}
        title="Create a Lobby"
        handleClose={closeModal}
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
