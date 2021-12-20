import React from "react";
import { Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles"
import { Link } from "react-router-dom";
import { Footer } from ".";

const useStyles = makeStyles(() => ({
    homeContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
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
    titleContainer: {
        paddingBottom: "10%",
        textAlign: "center"
    }
}));

const Home = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.homeContainer}>
                <div className={classes.titleContainer}>
                    <Typography variant="h5" style={{color:"white"}}>
                        Welcome
                    </Typography>
                    <Typography variant="h4" style={{color:"white"}}>
                        to
                    </Typography>
                    <Typography variant="h3" style={{color:"white"}}>
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