import React from "react";
import {
    PlayerOptions,
    PlayerSelections,
    WinningSequence,
    PlayerGuesses,
    Directions
} from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/"/>
                <Route path="/mastermind" element={
                    <>
                        <Directions />
                        <WinningSequence />
                        <PlayerSelections />
                        <PlayerGuesses />
                        <PlayerOptions />
                    </>
                } />
            </Routes>
        </Router>
    )
}

export default App;