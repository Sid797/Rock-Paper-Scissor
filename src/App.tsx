import { useContext, useEffect } from "react";
import "./App.css";
import { RPScontext } from "./context/RPScontext";
import useMovePicker from "./hooks/useMovePicker";
import useCalculateWinner from "./hooks/useCalculateWinner";
import Game from "./components/game-container/Game";
import GameScore from "./components/game-score/GameScore";

function App() {
  const {score,setScore ,userPicked, setUserPicked,opponentMove,setOpponentMove } = useContext(RPScontext);
  const opponentPicked = useMovePicker({ userMove: userPicked });
  const winner = useCalculateWinner({ userMove: userPicked, oppMove: opponentPicked });

  useEffect(()=>{
    localStorage.setItem('count',score.toString());
  },[score])

  const handleReset=()=>{
    if(winner==="user won"){
      setScore(score=>score+1)
    }
    setUserPicked("pick a move")
    setOpponentMove("pick a move")
  }
  
  console.log(userPicked, opponentPicked, winner,score);

  return (
    <>
      <GameScore movePickedByUserProp={userPicked}/>
      <Game movePickedByOpponentProp={opponentPicked}/>
      <h3>Opponent's move: {opponentPicked}</h3>
      <h1>Winner is: {winner}</h1>
      <button onClick={handleReset}>reset</button>
    </>
  );
}

export default App;