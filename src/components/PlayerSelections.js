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
    formSize: {
        height: "50px"
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
        setCounter,
        setPlayerGuess,
        winningNumbers,
        setIsLoading
     } = useContext(UserContext);
    const classes = useStyles();

    const formSubmitHandler = (event) => {
        event.preventDefault();

        if (JSON.stringify(selectedNumbers) === JSON.stringify(winningNumbers)) {
            setIsLoading(true);
            setCounter(0);
            setSelectedNumbers([])
            setPlayerGuess([]);
            alert("You win!")
        } else if (counter === 9) {
            setIsLoading(true)
            setCounter(0);
            setSelectedNumbers([])
            setPlayerGuess([]);
            alert("You lose!");
        } else {
            addPlayerGuess(selectedNumbers);
            setCounter(counter + 1);
            setSelectedNumbers([]);
        }
    }

    return (
        <Box className={classes.boxContainer}>
            <form onSubmit={formSubmitHandler} className={classes.formSize}>
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