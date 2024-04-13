import { useContext, useEffect, useState } from "react";
import { RPScontext } from "../context/RPScontext";

const useMovePicker = ({ userMove }) => {
  const possibleMoves = ["scissor", "paper", "rock"];
  const { opponentMove, setOpponentMove } = useContext(RPScontext);
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * 3);
    if (userMove === "pick a move") {
      setOpponentMove("pick a move");
    } else {
      setOpponentMove(possibleMoves[randomIndex]);
    }
  }, [userMove]);

  return opponentMove;
};

export default useMovePicker;
