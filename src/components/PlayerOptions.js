import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const PlayerOptions = () => {
    const { selectedNumbers, setSelectedNumbers, starterNums } = useContext(UserContext);

    const onClickHandler = (event) => {
        const selectedNum = event.target.value
        setSelectedNumbers([...selectedNumbers, selectedNum])
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