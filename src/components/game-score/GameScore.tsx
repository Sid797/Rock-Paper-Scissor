import { useContext } from "react";
import "./GameScoreStyles.css";
import { RPScontext } from "../../context/RPScontext";

const GameScore = ({ movePickedByUserProp }) => {
  const { score } = useContext(RPScontext);

  const getMoveTextStyle = (move) => {
    return move === movePickedByUserProp ? { color: "red" } : {};
  };

  return (
    <nav className="game-score-container">
      <label className="available-moves">
        <h2 style={getMoveTextStyle("rock")}>Rock</h2>
        <h2 style={getMoveTextStyle("paper")}>Paper</h2>
        <h2 style={getMoveTextStyle("scissor")}>Scissor</h2>
      </label>
      <section className="score-container">
        <h4>SCORE</h4>
        <h1>{score}</h1>
      </section>
    </nav>
  );
};

export default GameScore;







