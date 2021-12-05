import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import getRandomNums from "../randomApi/randomApi";
import { NumberOptions } from ".";

const RandomSequence = () => {
    const { sequence, setSequence } = useContext(UserContext);

    const randomNums = async () => {
        try {
            const response = await getRandomNums();
            setSequence(response);
        }
        catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        randomNums();
    }, [])

    return (
        <>
            <h4>Winning Sequence</h4>
            <div className="sequenceContainer">
                {
                    sequence.length > 0 ? sequence.map((num, id) => {
                        return (
                            <div className="sequenceNums" key={id}>
                                {num}
                            </div>
                        )
                    }) :
                        <h3>Loading Nums...</h3>
                }
            </div>
        </>
    )
}

export default RandomSequence;