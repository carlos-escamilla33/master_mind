import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const PlayerSelections = () => {
    const { selectedNumbers, addHintNumbers, setSelectedNumbers, addPlayerGuess } = useContext(UserContext)

    const formSubmitHandler = (event) => {
        event.preventDefault();
        addHintNumbers(selectedNumbers);
        addPlayerGuess(selectedNumbers);
        setSelectedNumbers([]);
    }

    return (
        <>
            <h4>Current Selection</h4>
            <form onSubmit={formSubmitHandler}>
                {
                    selectedNumbers.map((selectedNum, id) => (
                        <button className="number" key={id}>
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