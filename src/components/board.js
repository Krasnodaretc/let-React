/**
 * Created by Krasnodaretc on 17.11.17.
 */
import React from 'react';
import Reload from './reload';
import {getStatusWinner , calculateWinner} from '../functions/game';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default class Board extends React.Component {
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

  reloadClick() {
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
        onClick={() => this.reloadClick()}
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