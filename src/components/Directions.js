import React, { useState } from "react";
import { Popover, Button, Box } from "@mui/material";
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(() => ({
    directionsContainer: {
        display: "flex",
        justifyContent: "center"
    }
}))

const Directions = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const classes = useStyles();

    const buttonClickHandler = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const buttonHandleClose = () => {
        setAnchorEl(null);
    }

    return (
        <div className={classes.directionsContainer}>
            <Button aria-describedby={id} variant="contained" onClick={buttonClickHandler}>
                Game Directions
            </Button>
            <Popover
                id={id}
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
                        ⚫ One number is on the correct spot.
                    </div>
                    <div>
                        ⚪  One number is misplaced.
                    </div>
                </Box>
            </Popover>
        </div>
    );
}

export default Directions;