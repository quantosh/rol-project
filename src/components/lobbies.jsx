import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './modal';
import '../styles/lobbies.css';

const Lobbies = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [lobbyName, setLobbyName] = useState('');

  // Simulated data for joined lobbies - should be state if it will change
  const [joinedLobbies, setJoinedLobbies] = useState([
    { id: 1, name: 'Lobby 1' },
    { id: 2, name: 'Lobby 2' }
  ]);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setLobbyName(''); // Clear the input field on close
  };

  const createLobby = () => {
    // Here, you would typically make a server request to create the lobby.
    // We'll simulate it by locally adding it to the list.
    const newLobby = { id: joinedLobbies.length + 1, name: lobbyName };
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
            {lobby.name}
          </li>
        ))}
      </ul>
      {
      console.log(modalVisible)
      }
      
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
    </div>
  );
};

export default Lobbies;
