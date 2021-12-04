import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
const Hints = () => {
    const { hintNumbers, sequence } = useContext(UserContext);

    console.log("HINTNUMS IN HINTS.JS", hintNumbers)

    const calculateHints = (numbers) => {
        const hints = [];
        const dupCheck = [];

        numbers.forEach((num, idx) => {
            if (sequence[idx] === num) {
                hints.push("full");
                dupCheck.push(num);
            }
            if (!dupCheck.includes(num) && sequence.includes(num)) {
                hints.push("half")
            }
        })

        return hints;
    }

    return (
        <>
            <h4>Hints</h4>
            {
                calculateHints(hintNumbers).map((hintNum, id) => (
                    <div className="hints" key={id}>
                        {hintNum}
                    </div>
                ))
            }
        </>
    )
}

export default Hints;