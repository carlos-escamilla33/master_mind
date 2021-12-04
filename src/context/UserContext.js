import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [sequence, setSequence] = useState([]);
    const [selectedNumbers, setSelectedNumbers] = useState([]);
    const [hintNumbers, setHintNumbers] = useState([]);
    const starterNums = [0, 1, 2, 3, 4, 5, 6, 7]
    console.log("HINT NUMBERS", hintNumbers);

    return (
        <UserContext.Provider
            value={{
                sequence,
                setSequence,
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