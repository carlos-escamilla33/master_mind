import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const PlayerSelections = () => {
    const { selectedNumbers, setSelectedNumbers, addPlayerGuess, counter, setCounter} = useContext(UserContext)


    const formSubmitHandler = (event) => {
        event.preventDefault();

        addPlayerGuess(selectedNumbers);
        setCounter(counter + 1);
        setSelectedNumbers([]);
    }

    return (
        <>
            <h4>Current Selection</h4>
            <form onSubmit={formSubmitHandler}>
                {
                    selectedNumbers.map((selectedNum, idx) => (
                        <button key={idx}>
                            {selectedNum}
                        </button>
                    ))
                }
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default PlayerSelections;