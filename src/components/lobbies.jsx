import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/lobbies.css';

class Lobbies extends React.Component {
  // Simulated data for joined lobbies
  joinedLobbies = [
    { id: 1, name: 'Lobby 1' },
    { id: 2, name: 'Lobby 2' }
  ];

  render() {
    return (
      <div className="lobbies-container">
        <div className="lobbies-buttons">
          <Link to="/create-lobby" className="retro-button">Create Lobby</Link>
          <Link to="/join-lobby" className="retro-button">Join Lobby</Link>
          <Link to="/view-characters" className="retro-button">Create Character Sheet</Link>
          <Link to="/create-character" className="retro-button">View Character Sheets</Link>
        </div>

        <h2 className="lobbies-list-header">Your Joined Lobbies:</h2>
        <ul className="lobbies-list">
          {this.joinedLobbies.map((lobby) => (
            <li key={lobby.id} className="lobbies-item">
              {lobby.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Lobbies;
