import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Paper, Box, Grid } from "@mui/material";

const PlayerGuesses = () => {
    const { playerGuess } = useContext(UserContext);
    return (
        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3, backgroundColor: "rgb(23 20 26)" }}>
            {
                playerGuess.map((guesses, idx) => (
                    <Paper sx={{ maxWidth: 500, my: 3, mx: 'auto', p: 5, backgroundColor: "rgb(83 82 84)" }} key={idx}>
                        <Grid container wrap="nowrap" spacing={10}>
                            <Grid item>
                                {idx + 1}
                            </Grid>
                            <Grid item>
                                {guesses.guess}
                            </Grid>
                            <Grid item>
                                {guesses.hints}
                            </Grid>
                        </Grid>
                    </Paper>
                ))
            }
        </Box>
    )
}

export default PlayerGuesses;