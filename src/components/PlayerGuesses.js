import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Hints } from ".";
import "./PlayerGuesses.css"

const PlayerGuesses = () => {
    const { playerGuess } = useContext(UserContext);
    console.log(playerGuess)

    return (
        <>
            {/* <div className="playerGuessContainer">
                {
                    playerInfo.map((guess, idx) => (
                        <>
                            <div key={idx}>
                                {guess}
                            </div>
                        </>
                    ))
                }
            </div> */}
        </>
    )
}

export default PlayerGuesses;