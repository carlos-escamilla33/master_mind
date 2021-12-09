import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(() => ({
    mainContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    counterContainer: {
        textAlign: "center",
        height: "60px",
        width: "150px",
        borderRadius: "20px",
        backgroundColor: "black"
    },
    counter: {
        color: "white",
    }
}))

const PlayerRounds = () => {
    const { counter } = useContext(UserContext);
    const classes = useStyles();

    return (
        <div className={classes.mainContainer}>
            <div className={classes.counterContainer}>
                <Typography 
                className={classes.counter} 
                variant="h3"
                >{counter}/10</Typography>
            </div>
        </div>
    )
}

export default PlayerRounds;