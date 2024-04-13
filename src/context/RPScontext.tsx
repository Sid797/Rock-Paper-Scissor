import { createContext, useState } from "react";

export const RPScontext = createContext(null);
export const RPSProvider = ({ children }) => {
  const [userPicked, setUserPicked] = useState();
  const [opponentMove, setOpponentMove] = useState(null);
  const [score,setScore]=useState(()=>{
    const storedScore=localStorage.getItem('count');
    return storedScore?parseInt(storedScore):0;
  });
  return (
    <RPScontext.Provider value={{ userPicked, setUserPicked,opponentMove,setOpponentMove,score,setScore }}>
      {children}
    </RPScontext.Provider>
  );
};