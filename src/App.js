import React from "react";
import {
    PlayerOptions,
    PlayerSelections,
    Hints,
    WinningSequence
} from "./components";
import "./App.css"

const App = () => {
    return (
        <div className="board">
            <WinningSequence />
            <PlayerSelections />
            <Hints />
            <PlayerOptions />
        </div>
    )
}

export default App;