import React from "react";
import { Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles"
import { Link } from "react-router-dom";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const useStyles = makeStyles(() => ({
    homeContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh"
    },
    startButton: {
        padding: "40px",
        color: "white",
        backgroundColor: "black",
        textAlign: "center",
        width: "100px",
        height: "50px",
        borderRadius: "15px",
        textDecoration: "none"
    },
}))

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.homeContainer}>
            <div>
                <Typography variant="h2">Matermind</Typography>
            </div>
            <Link className={classes.startButton} to="/mastermind">
                <Typography variant="h4">Start</Typography>
            </Link>
        </div>
    )
}

export default Home;