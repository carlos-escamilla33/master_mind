import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const PlayerGuesses = () => {
    const { playerGuesses } = useContext(UserContext);
    console.log(playerGuesses)

}

export default PlayerGuesses;