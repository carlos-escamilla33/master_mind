import React from "react";
import {
    PlayerOptions,
    PlayerSelections,
    WinningSequence,
    PlayerGuesses,
    Directions,
    Home
} from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    )
}

export default App;