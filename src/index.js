/**
 * Created by Krasnodaretc on 15.11.17.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './components/board';

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <div className="game-info">
            <div>Hello, World! It's me, Krasnodaretc</div>
            <ol>{/* TODO */}</ol>
          </div>
          <Board />
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