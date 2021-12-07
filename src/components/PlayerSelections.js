import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(() => ({
    formContainer: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "20%",
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
        <div>
            <form onSubmit={formSubmitHandler} className={classes.formContainer}>
                {
                   selectedNumbers.map((selectedNum, idx) => (
                        <Button variant="outlined" style={{color: "white"}} key={idx}>
                            {selectedNum}
                        </Button>
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
        </div>
    )
}

export default PlayerSelections;