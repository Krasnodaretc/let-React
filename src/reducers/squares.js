/**
 * Created by Krasnodaretc on 22.11.17.
 */

const squares = (state = Array(9).fill(null), action) => {
  switch (action.type) {
    case 'squere' :
      return action.squeres;
    case 'reload' :
      return new Array(9).fill(null);
    default: return state;
  }
};

export default squares;