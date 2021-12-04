import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const NumberOptions = () => {
    const { selectedNumbers, setSelectedNumbers, starterNums } = useContext(UserContext);

    const onClickHandler = (event) => {
        const selectedNum = event.target.value
        setSelectedNumbers([...selectedNumbers, selectedNum])
    }
    return (
        <>
            <h4>Pick a number</h4>
            {
                starterNums.map((num, id) => (
                    <button value={num} className="number" onClick={onClickHandler} key={id}>
                         {num}
                    </button>
                ))
            }
        </>
    )
}

export default NumberOptions