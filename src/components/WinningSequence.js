import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import getRandomNums from "../randomApi/randomApi";
import { Box, CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles"
import LockIcon from '@mui/icons-material/Lock';
import { textAlign } from "@mui/system";

const useStyles = makeStyles(() => ({
    numbers: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "30%",
        marginRight: "20%",
        marginTop: "10%",
        width: "40%",
    },
    lock: {
        color: "white",
        marginTop: "3%"
    }
}))

const WinningSequence = () => {
    const { winningNumbers, setWinningNumbers } = useContext(UserContext);
    const classes = useStyles();

    const randomNums = async () => {
        try {
            const response = await getRandomNums();
            setWinningNumbers(response);
        }
        catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        randomNums();
    }, []);

    return (
        <div className={classes.numbers}>
            {
                winningNumbers.length > 0 ?
                    <Box sx={{
                        width: 200,
                        height: 40,
                        backgroundColor: 'black',
                        borderRadius: "20px",
                        textAlign: "center"
                    }}><LockIcon color="primary" fontSize="large" style={{ color: "white", marginTop: "1%" }} /></Box>
                    :
                    <CircularProgress color="primary" size={70} />
            }
        </div>
    )
}

export default WinningSequence;