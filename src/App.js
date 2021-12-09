import React from "react";
import {
    PlayerOptions,
    PlayerSelections,
    WinningSequence,
    PlayerGuesses,
    Directions
} from "./components";

const App = () => {
    return (
        <>
            <Directions />
            <WinningSequence />
            <PlayerSelections />
            <PlayerGuesses />
            <PlayerOptions />
        </>
    )
}

export default App;