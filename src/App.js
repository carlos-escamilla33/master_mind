import React from "react";
import {
    PlayerOptions,
    PlayerSelections,
    WinningSequence,
    PlayerGuesses
} from "./components";
import "./App.css"

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