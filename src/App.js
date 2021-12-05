import React from "react";
import {
    RandomSequence,
    NumberOptions,
    PlayerSelections,
    Hints
} from "./components";
import "./App.css"

const App = () => {
    return (
        <div className="board">
            <RandomSequence />
            <PlayerSelections />
            <Hints />
            <NumberOptions />
        </div>
    )
}

export default App;