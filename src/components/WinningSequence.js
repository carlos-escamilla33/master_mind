import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import getRandomNums from "../randomApi/randomApi";
import { Box, CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles"
import LockIcon from '@mui/icons-material/Lock';

const useStyles = makeStyles(() => ({
    loading: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        margin: "auto",
        marginTop: "2.5%",
        width: "40%",
    }
}))

const WinningSequence = () => {
    const { isLoading, setIsLoading, setWinningNumbers, playerGuess } = useContext(UserContext);
    const classes = useStyles();

    const randomNums = async () => {
        try {
            const response = await getRandomNums();
            setWinningNumbers(response);
            setIsLoading(false);
        }
        catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        if (playerGuess.length === 0) {
            randomNums();
        }
    }, [playerGuess]);

    return (
        <div className={classes.loading}>
            {
                isLoading ?
                    <div style={{ position: 'relative' }}>
                        <span style={{ position: 'absolute', top: '10px', left: '2px', color: "white" }}>Winning Numbers...</span>
                        <CircularProgress size={75} />
                    </div>
                    :
                    <Box sx={{
                        width: 200,
                        height: 40,
                        backgroundColor: 'black',
                        borderRadius: "20px",
                        textAlign: "center"
                    }}><LockIcon color="primary" fontSize="large" style={{ color: "white", marginTop: "1%" }} /></Box>
            }
        </div>
    )
}

export default WinningSequence;