/**
 * Created by Krasnodaretc on 15.11.17.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import './index.css';
import Board from './components/board';
import boardApp from './reducers';

let store = createStore(boardApp);

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <div className="game-info">
            <div>Hello, World! It's me, Krasnodaretc</div>
            <ol>{/* TODO */}</ol>
          </div>
          <Board/>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);