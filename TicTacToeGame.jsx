import React, { useState } from 'react';

const TicTacToeGame = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(true);

  const handleClick = (index) => {
    const squares = [...board];

    if (calculateWinner(squares) || squares[index]) {
      return;
    }

    squares[index] = player ? 'X' : 'O';
    setBoard(squares);
    setPlayer(!player);
  };

  const renderBox = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  const winner = getWinner(board);
  const status = winner ? `Winner Name: ${winner}` : `Active Player: ${player ? 'X' : 'O'}`;

  return (
    <div className="board">
      <div className="status">{status}</div>

      <div className="board-row">
        {renderBox(0)}
        {renderBox(1)}
        {renderBox(2)}
      </div>
      <div className="board-row">
        {renderBox(3)}
        {renderBox(4)}
        {renderBox(5)}
      </div>
      <div className="board-row">
        {renderBox(6)}
        {renderBox(7)}
        {renderBox(8)}
      </div>

    </div>
  );
};


const getWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {

    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {

      return squares[a];

    }

  }

  return null;
};

export default TicTacToeGame;