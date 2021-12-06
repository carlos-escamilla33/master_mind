import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const PlayerOptions = () => {
    const { setSelectedNumbers, starterNums } = useContext(UserContext);
    const addSelectedNums = (number) => {
        setSelectedNumbers((prevNumbers) => {
            return [...prevNumbers, number]
        })
    }
    const onClickHandler = (event) => {
        const selectedNum = event.target.value
        addSelectedNums(selectedNum);
    };
    return (
        <div>
            <h4>Pick a number sequence</h4>
            <div>
                {
                    starterNums.map((num, id) => (
                        <button value={num} onClick={onClickHandler} key={id}>
                            {num}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default PlayerOptions;