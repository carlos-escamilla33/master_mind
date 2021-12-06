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
            <PlayerGuesses />
            <PlayerSelections />
            <PlayerOptions />
        </>
    )
}

export default App;