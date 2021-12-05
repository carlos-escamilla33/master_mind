import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const NumberOptions = () => {
    const { selectedNumbers, setSelectedNumbers, starterNums } = useContext(UserContext);

    const onClickHandler = (event) => {
        const selectedNum = event.target.value
        setSelectedNumbers([...selectedNumbers, selectedNum])
    };
    return (
        <>
        <h4>Pick a number sequence</h4>
        <div className="lineUp">
            {
                starterNums.map((num, id) => (
                    <button value={num} className="number" onClick={onClickHandler} key={id}>
                         {num}
                    </button>
                ))
            }
        </div>
        </>
    )
}

export default NumberOptions