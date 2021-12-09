import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Button, Paper, Typography, Fade } from "@mui/material";
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(() => ({
    paper: {
        display: "flex",
        justifyContent: "space-evenly",
        padding: "35px"
    },
}));

const PlayerOptions = () => {
    const { setSelectedNumbers, starterNums, selectedNumbers } = useContext(UserContext);
    const classes = useStyles();
    const addSelectedNums = (number) => {
        setSelectedNumbers((prevNumbers) => {
            return [...prevNumbers, number]
        })
    }

    const onClickHandler = (event) => {
        const selectedNum = event.currentTarget.value;
        addSelectedNums(selectedNum);
    };

    return (
        <Paper className={classes.paper} sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: "black" }}>
            {
                selectedNumbers.length !== 4 ?
                    starterNums.map((num, idx) => (
                        <Fade in={true} key={idx}>
                            <Button
                                className={classes.button}
                                style={{ color: "white" }}
                                variant="outlined"
                                size={"large"}
                                value={num}
                                onClick={onClickHandler}
                            ><Typography variant="h5">{num}</Typography>
                            </Button>
                        </Fade>
                    )) :
                    <Typography variant="h4" style={{ color: "white" }}>Submit Your Guess! 😊</Typography>
            }
        </Paper>

    )
}

export default PlayerOptions;