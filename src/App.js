import React from "react";
import {
    PlayerOptions,
    PlayerSelections,
    WinningSequence,
    PlayerGuesses
} from "./components";

const App = () => {
    return (
        <>
            <WinningSequence />
            <PlayerSelections />
            <PlayerGuesses />
            <PlayerOptions />
        </>
    )
}

export default App;