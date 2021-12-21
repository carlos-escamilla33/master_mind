import React, { useState } from "react";
import { Popover, Button, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles"
import { PlayerRounds } from ".";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


const useStyles = makeStyles(() => ({
    directionsContainer: {
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: "2%",
    },
    backLink: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        width: "125px",
        borderRadius: "10px",
        textAlign: "center",
        backgroundColor: "black",
        "&:hover": {
            backgroundColor: "#0c0c0c",
            color: '#1776d1',
        },
        color: "white",
        textDecoration: "none",
    },
    arrow: {
        fontSize: "100px"
    }
}))

const Directions = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const classes = useStyles();

    const buttonClickHandler = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const buttonHandleClose = () => {
        setAnchorEl(null);
    }

    return (
        <div className={classes.directionsContainer}>
            <Link className={classes.backLink} to="/">
                <Typography>
                    <KeyboardBackspaceIcon fontSize="large"className={classes.arrow}/>
                </Typography>
            </Link>
            <div>
                <Button
                    style={{ height: "45px" }}
                    size="medium"
                    variant="contained"
                    onClick={buttonClickHandler}>
                    Game Directions
                </Button>
                <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={buttonHandleClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}
                >
                    <Box sx={{ p: 3 }}>
                        <div>
                            You must break the secret four number code in 10 guesses or less.
                        </div>
                        <div>
                            Duplicate numbers could be included in the secret code.
                        </div>
                        <div>
                            Hints are shuffled every guess.
                        </div>
                        <div>
                            Click on the question mark to submit your guess after picking 4 numbers.
                        </div>
                        <div>
                            ⚫ One number is on the correct spot.
                        </div>
                        <div>
                            ⚪  One number is misplaced.
                        </div>
                        <div>
                            🔵  One number is wrong.
                        </div>
                    </Box>
                </Popover>
            </div>
            <PlayerRounds />
        </div>
    );
}

export default Directions;