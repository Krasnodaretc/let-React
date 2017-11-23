/**
 * Created by Krasnodaretc on 22.11.17.
 */
const overed = (state = false, action) => {
  switch (action.type) {
    case 'win' :
      return `Winner is Player ${action.player}`;
    case 'over' :
      return `Dead end. Try again!`;
    case 'nest':
      return `Next player: ${action.player}`;
    default:
      return state;
  }
};

export default overed;