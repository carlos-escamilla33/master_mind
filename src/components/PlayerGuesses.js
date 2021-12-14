import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Paper, Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
    box: {
        display: "flex",
        flexDirection: "column-reverse",
        flexGrow: 1,
        overflow: 'hidden',
        mx: 'auto',
        px: 1,
        backgroundColor: "rgb(23 20 26)",
        marginTop: "3%",
        borderRadius: "25px",
        [theme.breakpoints.up('xs')]: {
            maxWidth: "70%",
            height: "40%",
            marginBottom: "40%",
        },
        [theme.breakpoints.up('sm')]: {
            maxWidth: "50%",
            marginBottom: "15%",
        },
    },
    paper: {
        display: "flex",
        justifyContent: "space-evenly"
    }

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
                                                marginTop:"25%",
                                                width: 20,
                                                height: 20,
                                                backgroundColor: 'black',
                                                borderRadius: 10
                                            }} />
                                        </Grid>)
                                    } else if (hint === "almost") {
                                        return (<Grid item key={idx}>
                                            <Box sx={{
                                                marginTop:"25%",
                                                width: 20,
                                                height: 20,
                                                backgroundColor: 'white',
                                                borderRadius: 10
                                            }} />
                                        </Grid>)
                                    } else {
                                        return (<Grid item key={idx}>
                                            <Box sx={{
                                                marginTop:"25%",
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