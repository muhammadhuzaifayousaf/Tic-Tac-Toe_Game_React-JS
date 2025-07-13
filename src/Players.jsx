import React from 'react';
import './css/players.css';

const Players = ({ xWins = 0, oWins = 0 }) => {
  return (
    <div className='players'>
      <div className='player'>Player 1 (X): {xWins} Wins</div>
      <div className='player'>Player 2 (O): {oWins} Wins</div>
    </div>
  );
};

export default Players;