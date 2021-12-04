import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const NumberOptions = () => {
    const { userSelection, setUserSelection } = useContext(UserContext);
    const starterNums = [0, 1, 2, 3, 4, 5, 6, 7]
    const onClickHandler = (event) => {
        setUserSelection([...userSelection, event.target.value])
    }
    return (
        <>
            <h4>Player Selection Options</h4>
            {
                starterNums.map((num, id) => (
                    <button value={num} style={{margin: "10px"}}onClick={onClickHandler} key={id}>
                        {num}
                    </button>
                ))
            }
        </>
    )
}

export default NumberOptions