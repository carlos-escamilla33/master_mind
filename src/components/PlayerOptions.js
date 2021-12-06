import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Button, BottomNavigation, Paper } from "@mui/material";

const PlayerOptions = () => {
    const { setSelectedNumbers, starterNums } = useContext(UserContext);

    const addSelectedNums = (number) => {
        setSelectedNumbers((prevNumbers) => {
            return [...prevNumbers, number]
        })
    }

    const onClickHandler = (event) => {
        const selectedNum = event.target.value
        addSelectedNums(selectedNum);
    };

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: "rgb(83 82 84)" }} elevation={3}>
            <BottomNavigation sx={{ m: 3,}} sx={{ backgroundColor: "rgb(83 82 84)" }}>
                {
                    starterNums.map((num, id) => (
                        <Button variant="outlined" value={num} onClick={onClickHandler} key={id}>
                            {num}
                        </Button>
                    ))
                }
            </BottomNavigation>
        </Paper>

    )
}

export default PlayerOptions;