import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Hints } from ".";
import "./PlayerGuesses.css"

const PlayerGuesses = () => {
    const { playerGuess } = useContext(UserContext);
    return (
        <>
            {
                playerGuess.map((guesses, idx) => (
                    <div key={idx}>
                        {guesses.guess}
                        {guesses.hints}
                    </div>
                ))
            }
        </>
    )
}

export default PlayerGuesses;