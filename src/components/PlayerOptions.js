import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Button, BottomNavigation, Paper, Typography, BottomNavigationAction } from "@mui/material";
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(() => ({
    paper: {
        display: "flex",
        justifyContent: "space-evenly",
        padding: "40px"
    },
}));

const PlayerOptions = () => {
    const { setSelectedNumbers, starterNums } = useContext(UserContext);
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
                    starterNums.map((num, id) => (
                        <Button
                            className={classes.button}
                            variant="outlined"
                            size={"large"}
                            value={num}
                            onClick={onClickHandler}
                            key={id}
                            ><Typography>{num}</Typography>
                        </Button>
                    ))
                }
        </Paper>

    )
}

export default PlayerOptions;