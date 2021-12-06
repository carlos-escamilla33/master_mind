import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [winningNumbers, setWinningNumbers] = useState([]);
    const [selectedNumbers, setSelectedNumbers] = useState([]);
    const [hintNumbers, setHintNumbers] = useState([]);
    const [playerGuesses, setPlayerGuesses] = useState([]);
    const starterNums = [0, 1, 2, 3, 4, 5, 6, 7];
    console.log(hintNumbers);

    const addPlayerGuess = (guess) => {
        setPlayerGuesses((prevGuesses) => {
            return [guess, ...prevGuesses];
        });
    };

    const addHintNumbers = (hints) => {
        setHintNumbers((prevHints) => {
            return [hints, ...prevHints]
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