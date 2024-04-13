import "./GameStyles.css";
import Rock from './buttons/Rock';
import Paper from './buttons/Paper';
import Scissor from './buttons/Scissor';

const Game = ({ movePickedByOpponentProp }) => {
  let opponentMoveComponent = null;

  switch (movePickedByOpponentProp) {
    case "rock":
      opponentMoveComponent = <Rock />;
      break;
    case "paper":
      opponentMoveComponent = <Paper />;
      break;
    case "scissor":
      opponentMoveComponent = <Scissor />;
      break;
    default:
      opponentMoveComponent = null;
      break;
  }

  return (
    <div className="game-container">
      <Rock />
      <Paper />
      <Scissor />
      <div className="opponent-move">
        {opponentMoveComponent}
      </div>
    </div>
  );
};

export default Game;
