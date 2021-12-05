import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
const Hints = () => {
    const { hintNumbers, sequence } = useContext(UserContext);
    const calculateHints = (numbers) => {
        const hints = [];

        numbers.forEach((num, idx) => {
            if (sequence[idx] === num) {
                hints.push("full");
            } else if (sequence.includes(num)) {
                hints.push("half")
            } else {
                hints.push("empty")
            }
        })

        return hints;
    }
    const hintsArray = calculateHints(hintNumbers);
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
                        <div className={hintNumClass} key={id}>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Hints;