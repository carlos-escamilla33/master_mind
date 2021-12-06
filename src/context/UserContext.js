import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [winningNumbers, setWinningNumbers] = useState([]); //winning numbers sequence
    const [selectedNumbers, setSelectedNumbers] = useState([]); //numbers selected by the user
    const [playerGuess, setPlayerGuess] = useState([]);
    const starterNums = [0, 1, 2, 3, 4, 5, 6, 7];

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
        // const shuffledNums = shuffleHints(numbers);
        numbers.forEach((num, idx) => {
            if (winningNumbers[idx] === num) {
                hints.push("full");
            } else if (winningNumbers.includes(num)) {
                hints.push("half")
            } else {
                hints.push("empty")
            }
        })
        const shuffledHints = shuffleHints(hints);
        const playerInfo = {
            hints: shuffledHints,
            guess: numbers
        }
        return playerInfo;
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
                setWinningNumbers,
                selectedNumbers,
                setSelectedNumbers,
                starterNums,
                addPlayerGuess,
                playerGuess
            }}
        >{children}</UserContext.Provider>
    )
};

export {
    UserContext,
    UserProvider
}