import React from "react";
import {
    PlayerOptions,
    PlayerSelections,
    WinningSequence,
    PlayerGuesses
} from "./components";
import { createTheme, ThemeProvider } from "@mui/material";
//  rgb(36, 36, 36); 
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