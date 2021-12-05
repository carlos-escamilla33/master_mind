import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [winningNumbers, setWinningNumbers] = useState([]);
    const [selectedNumbers, setSelectedNumbers] = useState([]);
    const [hintNumbers, setHintNumbers] = useState([]);
    const starterNums = [0, 1, 2, 3, 4, 5, 6, 7]

    return (
        <UserContext.Provider
            value={{
                winningNumbers,
                setWinningNumbers,
                selectedNumbers,
                setSelectedNumbers,
                hintNumbers,
                setHintNumbers,
                starterNums
            }}
        >{children}</UserContext.Provider>
    )
};

export {
    UserContext,
    UserProvider
}