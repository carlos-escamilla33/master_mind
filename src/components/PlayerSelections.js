import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Button, Box, Fade, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(() => ({
    boxContainer: {
        display: "flex",
        justifyContent: "center",
        marginTop: "2%",
    },
    form: {
        height: "60px"
    },
    buttonSize: {
        width: "80px",
        height: "55px"
    },
}))

const PlayerSelections = () => {
    const { selectedNumbers,
        setSelectedNumbers,
        addPlayerGuess,
        counter,
        setCounter } = useContext(UserContext);
    const classes = useStyles();

    const formSubmitHandler = (event) => {
        event.preventDefault();

        addPlayerGuess(selectedNumbers);
        setCounter(counter + 1);
        setSelectedNumbers([]);
    }

    return (
        <Box className={classes.boxContainer}>
            <form onSubmit={formSubmitHandler} className={classes.form}>
                {
                    selectedNumbers.map((selectedNum, idx) => (
                        <Fade in={true} key={idx}>
                            <Button
                                className={classes.buttonSize}
                                variant="outlined"
                                style={{ color: "white", transitionDelay: '600ms', margin: "5px" }}
                                key={idx}>
                                <Typography variant={"h3"}>{selectedNum}</Typography>
                            </Button>
                        </Fade>
                    ))
                }
                {
                    selectedNumbers.length === 4 ?
                        <Button
                            sx={{ borderRadius: 10 }}
                            className={classes.buttonSize}
                            variant="outlined"
                            type="submit"><Typography variant={"h3"}>?</Typography>
                        </Button>
                        :
                        null
                }
            </form>
        </Box>
    )
}

export default PlayerSelections;