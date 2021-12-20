import React from "react";
import { Paper } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import { makeStyles } from "@mui/styles"
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
    footer: {
        display: "flex",
        justifyContent: "space-evenly",
        padding: "10px"
    },
    a: {
        color: "black",
        "&:hover": {
            color: "#1776d1",
        }
    }
}))

const Footer = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.footer} sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
            <a className={classes.a} href="https://www.linkedin.com/in/carlos-r-escamilla/">
                <LinkedInIcon fontSize="large"/>
            </a>
            <a className={classes.a} href="https://github.com/carlos-escamilla33/master_mind">
                <GitHubIcon fontSize="large"/>
            </a>
            <a className={classes.a} href="mailto:Crodriguezescamilla3@gmail.com">
                <MailIcon fontSize="large"/>
            </a>
        </Paper>
    )
}

export default Footer;