import React from "react";
import {
    PlayerOptions,
    PlayerSelections,
    WinningSequence,
    PlayerGuesses,
    Directions,
    Home
} from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />}/>
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