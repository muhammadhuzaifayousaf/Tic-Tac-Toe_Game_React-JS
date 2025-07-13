import React, { useEffect, useState } from 'react';
import './css/board.css';

const Board = ({reset, setReset, winner, setWinner, setXWins, setOWins, winLine, setWinLine}) => {
  const [data, setData] = useState(Array(9).fill(''));
  const [current, setCurrent] = useState('X');

  useEffect(() => {
    if(reset) {
      setData(Array(9).fill(''));
      setWinner('');
      setReset(false);
      setWinLine([]);
    }
  }, [reset, setReset, setWinner, setWinLine]);

  const Draw = (index) => {
    if(data[index] === "" && winner === "") {
      const board = [...data];
      board[index] = current;
      setData(board);

      const winning = checkWin(board);
      if(winning) {
        setWinLine(winning);
        if(current === "X") {
          setWinner("Player 1 Wins");
          setXWins(prev => prev + 1);
        } else {
          setWinner("Player 2 Wins");
          setOWins(prev => prev + 1);
        }
      } else if(checkDraw(board)) {
        setWinner("Draw");
      } else {
        setCurrent(current === "X" ? "O" : "X");
      }
    }
  };

  const checkDraw = (board) => board.every(cell => cell !== "");

  const checkWin = (board) => {
    const conditions = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ];
    for (let condition of conditions) {
      const [a, b, c] = condition;
      if (board[a] !== '' && board[a] === board[b] && board[b] === board[c]) {
        return condition;
      }
    }
    return null;
  };

  return (
    <div className='board'>
      {data.map((val, i) => (
        <div
          key={i}
          className={`input input${i+1} ${winLine.includes(i) ? 'win-cell' : ''}`}
          onClick={() => Draw(i)}
        >
          <span className='cell-content'>{val}</span>
        </div>
      ))}
    </div>
  );
};

export default Board;