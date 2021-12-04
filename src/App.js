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
        <>
            <RandomSequence />
            <NumberOptions />
            <PlayerSelections />
            <Hints />
        </>
    )
}

export default App;