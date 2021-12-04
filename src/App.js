import React from "react";
import {
    RandomSequence,
    NumberOptions,
    PlayerSelections
} from "./components";
import "./App.css"

const App = () => {
    return (
        <>
            <RandomSequence />
            <NumberOptions />
            <PlayerSelections />
        </>
    )
}

export default App;