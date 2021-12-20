import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles"
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
    homeContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh"
    },
    startContainer: {
        display: "flex",
        padding: "10px",
        borderRadius: "15px",
        justifyContent: "center",
        backgroundColor: "black"
    },
    link : {
        textDecoration: "none",
        color: "white"
    }
}));

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.homeContainer}>
            <div>
                <Typography variant="h1">Mastermind</Typography>
            </div>
            <div className={classes.startContainer}>
                <Link className={classes.link} to="/mastermind">
                    <Typography variant="h4">Start</Typography>
                </Link>
            </div>
        </div>
    )
}

export default Home;