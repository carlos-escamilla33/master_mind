import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { makeStyles } from "@mui/styles"
const useStyles = makeStyles(() => ({
    counterContainer: {
        textAlign: "center",
        width: "126px",
        borderRadius: "10px",
        backgroundColor: "black",
        color: "white",
        fontSize: "30px"
    },
}))

const PlayerRounds = () => {
    const { counter } = useContext(UserContext);
    const classes = useStyles();

    return (
        <div className={classes.mainContainer}>
            <div className={classes.counterContainer}>
                {counter}/10
            </div>
        </div>
    )
}

export default PlayerRounds;