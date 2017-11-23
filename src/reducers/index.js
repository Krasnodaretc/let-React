/**
 * Created by Krasnodaretc on 21.11.17.
 */
import { combineReducers } from 'redux';
import squares from './squares';
import overed from './overed';


let boardApp = combineReducers({
  squares,
  overed
});

export default boardApp;