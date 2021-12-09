import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Paper, Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles"
import { borderRadius } from "@mui/system";

const useStyles = makeStyles(() => ({
    box: {
        display: "flex",
        flexDirection: "column-reverse",
        flexGrow: 1,
        overflow: 'hidden',
        mx: 'auto',
        px: 1,
        backgroundColor: "rgb(23 20 26)",
        marginTop: "3%",
        marginBottom: "20%",
        maxWidth: "50%",
        borderRadius: "25px"
    },
    paper: {
        display: "flex",
        justifyContent: "space-evenly"
    },
    correct: {
        backGroundColor: "black",
        width: "40px",
        borderRadius: "100px",
        height: "20x"
    },
    almost: {
        backGroundColor: "white",
        borderRadius: "40px",
        width: "20px",
        height: "20x"
    },
    wrong: {
        backGroundColor: "red",
        borderRadius: "40px",
        width: "20px",
        height: "20x"
    },

}))

const PlayerGuesses = () => {
    const { playerGuess } = useContext(UserContext);
    const classes = useStyles();

    return (
        <Box className={classes.box} sx={{ mx: "auto" }}>
            {
                playerGuess.length === 0 ? null
                    :
                    playerGuess.map((guesses, idx) => (
                        <Paper key={idx} className={classes.paper} sx={{
                            maxWidth: "90%",
                            my: 1,
                            mx: 'auto',
                            p: 2,
                            backgroundColor: "rgb(83 82 84)",
                            borderRadius: 5
                        }}>
                            <Grid container wrap="nowrap" spacing={{
                                xs: 1,
                                sm: 2,
                                md: 6,
                                lg: 7
                            }}>
                                <Grid item>
                                    <Typography variant="h5">{idx + 1}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h5">{guesses.guess}</Typography>
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
                                    } else {
                                        return (<Grid item key={idx}>
                                            <Box sx={{
                                                width: 20,
                                                height: 20,
                                                backgroundColor: '#1776d1',
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