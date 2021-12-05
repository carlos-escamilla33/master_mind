import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const PlayerSelections = () => {
    const { selectedNumbers, setHintNumbers } = useContext(UserContext)

    const formSubmitHandler = (event) => {
        event.preventDefault();
        setHintNumbers([...selectedNumbers])
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