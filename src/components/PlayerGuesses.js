import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Hints } from ".";
import "./PlayerGuesses.css"

const PlayerGuesses = () => {
    const { playerGuesses, hintNumbers } = useContext(UserContext);
    return (
        <>
            <div className="playerGuessContainer">
                {
                    playerGuesses.map((guess, idx) => (
                        <>
                            <div key={idx}>
                                {guess}
                            </div>
                            <div className="hintsContainer">
                                {
                                    hintNumbers.map((hint, idx) => (
                                        <div style={{ margin: "3px" }} key={idx}>
                                            {hint}
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                    ))
                }
            </div>
        </>
    )
}

export default PlayerGuesses;