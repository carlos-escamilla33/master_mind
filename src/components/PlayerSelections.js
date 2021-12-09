import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Button, Box, Fade } from "@mui/material";
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(() => ({
    formContainer: {
        display: "flex",
        justifyContent: "center",
        // marginBottom: "40%",
        marginTop: "5%",
    }
}))

const PlayerSelections = () => {
    const { selectedNumbers,
        setSelectedNumbers,
        addPlayerGuess,
        counter,
        setCounter } = useContext(UserContext)
    const classes = useStyles()

    const formSubmitHandler = (event) => {
        event.preventDefault();

        addPlayerGuess(selectedNumbers);
        setCounter(counter + 1);
        setSelectedNumbers([]);
    }

    return (
        <form onSubmit={formSubmitHandler} className={classes.formContainer}>
            {
                selectedNumbers.map((selectedNum, idx) => (
                    <Box sx={{ display: 'flex' }}>
                        <Fade in={true}>
                            <Button
                                variant="outlined"
                                style={{ color: "white", transitionDelay: '600ms' }}
                                key={idx}>
                                {selectedNum}
                            </Button>
                        </Fade>
                    </Box>
                ))
            }
            <div>
                {
                    selectedNumbers.length > 0 ?
                        <Button variant="contained" type="submit">Submit</Button>
                        :
                        null
                }
            </div>
        </form>
    )
}

export default PlayerSelections;