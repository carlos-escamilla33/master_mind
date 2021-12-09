import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const PlayerRounds = () => {
    const { counter } = useContext(UserContext);

    return (
        <div>
            <Typography>{counter}</Typography>
        </div>
    )
}

export default PlayerRounds;