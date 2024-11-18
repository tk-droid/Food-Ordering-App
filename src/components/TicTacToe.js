import React, { useState, useEffect } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const win = calculateWinner(board);
    setWinner(win);

    if (win) {
      const timer = setTimeout(() => {
        resetGame();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [board]);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const renderSquare = (index) => (
    <button 
      className={`w-24 h-24 text-4xl font-bold border border-gray-300 rounded-lg focus:outline-none 
                  ${winner === board[index] ? 'bg-green-400' : 'bg-white hover:bg-gray-100'}`} 
      onClick={() => handleClick(index)}
    >
      {board[index]}
    </button>
  );

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  const isDraw = () => {
    return board.every(square => square !== null) && !winner;
  };

  const status = winner
    ? `Winner: ${winner}`
    : isDraw()
    ? 'It\'s a draw!'
    : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="flex flex-col items-center mt-10">
      <div className={`status text-xl mb-4 ${winner ? 'text-green-600' : 'text-gray-800'}`}>{status}</div>
      <div className="grid grid-cols-3 gap-2">
        {board.map((_, index) => (
          <div key={index} className="flex justify-center items-center">
            {renderSquare(index)}
          </div>
        ))}
      </div>
      <button 
        className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
        onClick={resetGame}
      >
        Restart Game
      </button>
    </div>
  );
};

// Helper function to determine the winner
const calculateWinner = (squares) => {
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

export default TicTacToe;
