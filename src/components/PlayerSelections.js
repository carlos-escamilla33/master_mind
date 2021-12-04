import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const PlayerSelections = () => {
    const { userSelection } = useContext(UserContext)
    return (
        <>
            <h4>Current Selection</h4>

            {
                userSelection.length > 4 ? userSelection.length = ""
                    :
                    userSelection.map((selectedNum, id) => (
                        <button style={{ margin: "5px" }} key={id}>
                            {selectedNum}
                        </button>
                    ))
            }
        </>
    )
}

export default PlayerSelections;