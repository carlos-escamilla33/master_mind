import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [sequence, setSequence] = useState([]);

    return (
        <UserContext.Provider
            value={{
                sequence,
                setSequence
            }}
        >{children}</UserContext.Provider>
    )
};

export {
    UserContext,
    UserProvider
}