import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const PlayerSelections = () => {
    const { selectedNumbers, setSelectedNumbers, setHintNumbers} = useContext(UserContext)

    const formSubmitHandler = (event) => {
        event.preventDefault();
        setHintNumbers([...selectedNumbers])
        setSelectedNumbers([]);
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <h4>Current Selection</h4>
            {
                selectedNumbers.map((selectedNum, id) => (
                    <button className="number" key={id}>
                        {selectedNum}
                    </button>
                ))
            }
            {
                selectedNumbers.length === 4 ? <button className="submit" type="submit">?</button>
                    :
                    null
            }
        </form>
    )
}

export default PlayerSelections;