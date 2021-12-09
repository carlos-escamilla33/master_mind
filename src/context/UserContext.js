import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [winningNumbers, setWinningNumbers] = useState([]);
    const [selectedNumbers, setSelectedNumbers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [playerGuess, setPlayerGuess] = useState([]);
    const [counter, setCounter] = useState(0);
    const starterNums = [0, 1, 2, 3, 4, 5, 6, 7];
    console.log(winningNumbers)

    const shuffleHints = (hintsArr) => {
        for (let i = hintsArr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = hintsArr[i];
            hintsArr[i] = hintsArr[j];
            hintsArr[j] = temp;
        }
        return hintsArr;
    }

    const checkGuess = (numbers) => {
        const hints = [];
        numbers.forEach((num, idx) => {
            if (winningNumbers[idx] === num) {
                hints.push("correct");
            } else if (winningNumbers.includes(num)) {
                hints.push("almost")
            } else {
                hints.push("wrong")
            }
        })
        const shuffledHints = shuffleHints(hints);

        return {
            hints: shuffledHints,
            guess: numbers
        };
    }

    const addPlayerGuess = (guessArray) => {
        const guess = checkGuess(guessArray);
        setPlayerGuess((prevGuesses) => {
            return [...prevGuesses, guess]
        });
    };

    return (
        <UserContext.Provider
            value={{
                winningNumbers,
                setPlayerGuess,
                setWinningNumbers,
                isLoading,
                setIsLoading,
                selectedNumbers,
                setSelectedNumbers,
                starterNums,
                addPlayerGuess,
                playerGuess,
                setCounter,
                counter
            }}
        >{children}</UserContext.Provider>
    )
};

export {
    UserContext,
    UserProvider
}