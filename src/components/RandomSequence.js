import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import getRandomNums from "../randomApi/randomApi";

const RandomSequence = () => {
    const { sequence, setSequence } = useContext(UserContext);

    const randomNums = async () => {
        try {
            const response = await getRandomNums();
            console.log(response);
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
            <h1>Generating random number sequence</h1>
                {
                    sequence.length > 0 ? sequence.map((num, id) => {
                        return (
                            <div key={id}>
                                <h1>{num}</h1>
                            </div>
                        )
                    }) :
                    <h3>Loading Nums...</h3>
                }
            </>
            )
}

            export default RandomSequence;