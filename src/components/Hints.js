import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
const Hints = () => {
    const { hintNumbers } = useContext(UserContext);
    return (
        <>
            <h4>Hints</h4>
            {
                hintNumbers.map((hintNum, id) => (
                    <button className="number" key={id}>
                        {hintNum}
                    </button>
                ))
            }
        </>
    )
}

export default Hints;