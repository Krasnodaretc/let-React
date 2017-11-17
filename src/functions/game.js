/**
 * Created by Krasnodaretc on 17.11.17.
 */
export function calculateWinner(squares) {
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

  for (let i = lines.length - 1; i >= 0; i--) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return 'win';
    }
  }

  if ( !~squares.indexOf(null) ) return 'over';
  return null;
}

export function getStatusWinner (winner , nextPlayer) {
  let statusText;

  switch (winner) {
    case 'over':
      statusText = `Dead end. Try again!`;
      break;
    case 'win':
      statusText = `Congrats Player ${nextPlayer ? 'O' : 'X'}!`;
      break;
    default:
      statusText = `Next player: ${nextPlayer ? 'X' : 'O'}`;
  }
  return statusText;
}