import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const NumberOptions = () => {
    const { userSelection, setUserSelection, starterNums } = useContext(UserContext);
    const onClickHandler = (event) => {
        const selectedNum = event.target.value
        if (selectedNum in starterNums) {
            console.log('match')
        } else {
            null
        }
        setUserSelection([...userSelection, selectedNum])
    }
    return (
        <>
            <h4>Pick a number</h4>
            {
                starterNums.map((num, id) => (
                    <button value={num} style={{ margin: "10px" }} onClick={onClickHandler} key={id}>
                        {num}
                    </button>
                ))
            }
        </>
    )
}

export default NumberOptions