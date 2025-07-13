import { useState } from "react";
import Board from "./Board";
import Players from "./Players";
import './css/App.css';

function App() {
  const [reset, setReset] = useState(false);
  const [winner, setWinner] = useState('');
  const [xWins, setXWins] = useState(0);
  const [oWins, setOWins] = useState(0);
  const [winLine, setWinLine] = useState([]);

  const Reset = () => {
    setReset(true);
    setWinLine([]);
  };

  return (
    <div className="App">
      <h1 className="game-title">Tic-Tac-Toe</h1>
      <div className={`winner ${winner !== "" ? "" : "shrink"}`}>
        <div className="winner-text">{winner}</div>
        <button onClick={Reset}>Reset</button>
      </div>
      <Board 
        reset={reset} setReset={setReset} 
        winner={winner} setWinner={setWinner} 
        setXWins={setXWins} setOWins={setOWins} 
        winLine={winLine} setWinLine={setWinLine}
      />
      <Players xWins={xWins} oWins={oWins} />
    </div>
  );
}

export default App;