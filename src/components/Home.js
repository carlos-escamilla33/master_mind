import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles"
import { Link } from "react-router-dom";
import { Footer } from ".";
import sky from "../media/sky.jpg"

const useStyles = makeStyles(() => ({
    homeContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#B1A296"
    },
    startContainer: {
        display: "flex",
        padding: "15px",
        borderRadius: "15px",
        justifyContent: "center",
        backgroundColor: "black",
        "&:hover": {
            backgroundColor: "#1776d1",
        }
    },
    link: {
        textDecoration: "none",
        color: "white"
    },
    title: {
        paddingBottom: "10%",
        textAlign: "center"
    }
}));

const Home = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.homeContainer}>
                <div className={classes.title}>
                    <Typography variant="h4">
                        Welcome
                    </Typography>
                    <Typography variant="h3">
                        to
                    </Typography>
                    <Typography variant="h2">
                        Mastermind
                    </Typography>
                    <Typography variant="h2">
                        🎮 🧠
                    </Typography>
                </div>
                <div className={classes.startContainer}>
                    <Link className={classes.link} to="/mastermind">
                        <Typography variant="h4">Start</Typography>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;