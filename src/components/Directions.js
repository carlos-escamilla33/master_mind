import React, { useState } from "react";
import { Popover, Button, Box } from "@mui/material";
import { makeStyles } from "@mui/styles"
import { PlayerRounds } from ".";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
    directionsContainer: {
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: "2%",
    },
    backButton: {
        backgroundColor: "black",
        "&:hover": {
            backgroundColor: "#0c0c0c",
            color: '#1776d1',
        },
        padding: "7px",
        width: "150px",
        borderRadius: "10px",
        textAlign: "center",
        color: "white",
        textDecoration: "none",
        fontSize: "20px"
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
        <>
            <div className={classes.directionsContainer}>
                <Link className={classes.backButton} to="/">Back</Link>
                <Button
                    style={{borderRadius: "10px"}}
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
                <PlayerRounds />
            </div>
        </>
    );
}

export default Directions;