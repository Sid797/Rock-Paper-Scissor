import React, { useContext } from 'react'
import { RPScontext } from '../context/RPScontext';

const useCalculateWinner = ({ userMove, oppMove }) => {
    if(userMove ==="pick a move" && oppMove==="pick a move"){
        return "move not picked"
    }
    if (userMove === oppMove) {
        return "draw";
    }
    if (
        (userMove === "rock" && oppMove === "scissor") ||
        (userMove === "paper" && oppMove === "rock") ||
        (userMove === "scissor" && oppMove === "paper")
    ) {
        return "user won";
    } else {
        return "opp won";
    }

}

export default useCalculateWinner;
