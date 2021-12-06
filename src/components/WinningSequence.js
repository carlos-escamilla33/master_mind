import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import getRandomNums from "../randomApi/randomApi";

const WinningSequence = () => {
    const { winningNumbers, setWinningNumbers } = useContext(UserContext);

    const randomNums = async () => {
        try {
            const response = await getRandomNums();
            setWinningNumbers(response);
        }
        catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        randomNums();
    }, []);

    return (
        <>
            <h4>Winning Sequence</h4>
            <div>
                {
                    winningNumbers.length > 0 ? winningNumbers.map((num, id) => {
                        return (
                            <div key={id}>
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

export default WinningSequence;