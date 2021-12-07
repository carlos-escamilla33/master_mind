import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Button, BottomNavigation, Paper, Typography, BottomNavigationAction } from "@mui/material";
import { makeStyles } from "@mui/styles"

const PlayerOptions = () => {
    const { setSelectedNumbers, starterNums } = useContext(UserContext);

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
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: "rgb(83 82 84)" }}>
                {
                    starterNums.map((num, id) => (
                        <Button
                            variant="contained"
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