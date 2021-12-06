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
            <PlayerGuesses />
            <WinningSequence />
            <PlayerSelections />
            <PlayerOptions />
        </>
    )
}

export default App;