import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [winningNumbers, setWinningNumbers] = useState([]);
    const [selectedNumbers, setSelectedNumbers] = useState([]);
    const [hintNumbers, setHintNumbers] = useState([]);
    const [playerGuesses, setPlayerGuesses] = useState([]);
    const starterNums = [0, 1, 2, 3, 4, 5, 6, 7];

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

    const shuffleHints = (hintsArr) => {
        for (let i = hintsArr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = hintsArr[i];
            hintsArr[i] = hintsArr[j];
            hintsArr[j] = temp;
        }
        return hintsArr;
    }

    const addHintNumbers = (hints) => {
        const hintsArr = calculateHints(hints);
        const finalHints = shuffleHints(hintsArr)
        setHintNumbers((prevHints) => {
            return [...prevHints, finalHints]
        });
    };

    const addPlayerGuess = (guess) => {
        setPlayerGuesses((prevGuesses) => {
            return [...prevGuesses, guess];
        });
    };

    return (
        <UserContext.Provider
            value={{
                winningNumbers,
                setWinningNumbers,
                addHintNumbers,
                selectedNumbers,
                setSelectedNumbers,
                hintNumbers,
                setHintNumbers,
                starterNums,
                playerGuesses,
                setPlayerGuesses,
                addPlayerGuess
            }}
        >{children}</UserContext.Provider>
    )
};

export {
    UserContext,
    UserProvider
}