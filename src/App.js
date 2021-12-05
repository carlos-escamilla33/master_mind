import React from "react";
import {
    PlayerOptions,
    PlayerSelections,
    Hints
} from "./components";
import "./App.css"

const App = () => {
    return (
        <div className="board">
            <PlayerSelections />
            <Hints />
            <PlayerOptions />
        </div>
    )
}

export default App;