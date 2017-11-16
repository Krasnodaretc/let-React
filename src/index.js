/**
 * Created by Krasnodaretc on 15.11.17.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Reload extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      active: props.active
    }
  }

  render() {
    return (
      <button className={(this.state.active ? 'active' : '') + ' reload'} onClick={this.props.onClick}>
        Заново
      </button>
    )
  }
}

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      overed: null
    }
  }

  handleClick(i) {
    if (this.state.overed) return;
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
      overed: calculateWinner(squares)
    });

    
  }

  reload() {
    this.setState({
      squares: new Array(9).fill(null),
      xIsNext: true,
      overed: null
    });
  }

  renderSquare(i) {
    return (
      <Square
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}/>
    );
  }

  renderReload() {
    return (
      <Reload
      onClick={() => this.reload()}
      active={!!this.state.overed}/>
    )
  }

  render() {
    let winner = this.state.overed;
    let status = getStatusWinner(winner , this.state.xIsNext);


    return (
      <div className="game-wrap">
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        {this.renderReload()}
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinner(squares) {
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

function getStatusWinner (winner , nextPlayer) {
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