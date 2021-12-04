import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [sequence, setSequence] = useState([]);
    const [userSelection, setUserSelection] = useState([]);
    const starterNums = [0, 1, 2, 3, 4, 5, 6, 7]
    console.log(userSelection)

    return (
        <UserContext.Provider
            value={{
                sequence,
                setSequence,
                userSelection,
                setUserSelection,
                starterNums
            }}
        >{children}</UserContext.Provider>
    )
};

export {
    UserContext,
    UserProvider
}