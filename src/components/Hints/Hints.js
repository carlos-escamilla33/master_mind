import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
const Hints = () => {
    const { selectedNumbers, winningNumbers } = useContext(UserContext);
    const calculateHints = (numbers) => {
        const hints = [];

        numbers.forEach((num, idx) => {
            if (winningNumbers[idx] === num) {
                hints.push("full");
            } else if (winningNumbers.includes(num)) {
                hints.push("half")
            } else {
                hints.push("empty")
            }
        })

        return hints;
    }
    const hintsArray = calculateHints(selectedNumbers);
    console.log("ORIGINAL", hintsArray)

    const shuffleHints = (hintsArr) => {
        for (let i = hintsArr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = hintsArr[i];
            hintsArr[i] = hintsArr[j];
            hintsArr[j] = temp;
        }
        return hintsArr;
    }

    const shuffledHintArr = shuffleHints(hintsArray);
    console.log("SHUFFLED", shuffledHintArr);
    return (
        <>
            <h4>Hints</h4>
            <div>
                {
                    shuffledHintArr.map((hintNumClass, id) => (
                        <div key={id}>
                            {
                                hintNumClass
                            }
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Hints;