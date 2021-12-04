import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [sequence, setSequence] = useState([]);
    const [userSelection, setUserSelection] = useState([]);
    console.log(userSelection)

    return (
        <UserContext.Provider
            value={{
                sequence,
                setSequence,
                userSelection,
                setUserSelection
            }}
        >{children}</UserContext.Provider>
    )
};

export {
    UserContext,
    UserProvider
}