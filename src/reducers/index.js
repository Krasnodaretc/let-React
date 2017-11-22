/**
 * Created by Krasnodaretc on 21.11.17.
 */
import { combineReducers } from 'redux';
import squares from './squares';
import reload from './reload';


let boardApp = combineReducers({
  squares,
  reload
});

export default boardApp;