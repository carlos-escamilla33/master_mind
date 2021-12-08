import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Paper, Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(() => ({
    box: {
        flexGrow: 1,
        overflow: 'hidden',
        mx: 'auto',
        px: 1,
        backgroundColor: "rgb(23 20 26)",
        marginTop: "3%",
        marginBottom: "20%",
        maxWidth: "60%",
        borderRadius: "20px"
    },
    paper: {
        display: "flex",
        justifyContent: "space-evenly",
        borderRadius: "15px",
    },
    correct: {
        backGroundColor: "black",
        width: "40px",
        borderRadius: "100px",
        height: "20x"
    },
    almost: {
        display: "flex",
        backGroundColor: "white",
        borderRadius: "40px",
        width: "20px",
        height: "20x"
    }

}))

const PlayerGuesses = () => {
    const { playerGuess } = useContext(UserContext);
    const classes = useStyles();

    return (
        <Box className={classes.box} sx={{ mx: "auto" }}>
            {
                playerGuess.map((guesses, idx) => (
                    <Paper key={idx} className={classes.paper} sx={{ maxWidth: "95%", my: 1, mx: 'auto', p: 2, backgroundColor: "rgb(83 82 84)" }}>
                        <Grid container wrap="nowrap" spacing={{
                            xs: 2,
                            sm: 4,
                            md: 7,
                            lg: 12
                        }}>
                            <Grid item>
                                <Typography variant="h4">{idx + 1}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h4">{guesses.guess}</Typography>
                            </Grid>
                            {guesses.hints.map((hint, idx) => {
                                if (hint === "correct") {
                                    return (<Grid item key={idx}>
                                        <Box sx={{
                                            width: 20,
                                            height: 20,
                                            backgroundColor: 'black',
                                            borderRadius: 10
                                        }} />
                                    </Grid>)
                                } else if (hint === "almost") {
                                    return (<Grid item key={idx}>
                                        <Box sx={{
                                            width: 20,
                                            height: 20,
                                            backgroundColor: 'white',
                                            borderRadius: 10
                                        }} />
                                    </Grid>)
                                }
                            })}
                        </Grid>
                    </Paper>
                ))
            }
        </Box >
    )
}

export default PlayerGuesses;