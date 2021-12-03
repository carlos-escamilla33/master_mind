import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import getRandomNums from "./randomApi/randomApi";
const App = () => {
    const [nums, setNums] = useState([]);

    const randomNums = async () => {
        try {
            const response = await getRandomNums();
            setNums(response);
        }
        catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        randomNums();
    }, [])
    return (
        <>
            <h1>hello world</h1>
            {
                nums.map((num, id) => {
                    return (
                        <div key={id}>
                            <h1>{num}</h1>
                        </div>
                    )
                })
            }
        </>
    )
}

ReactDom.render(
    <App />,
    document.getElementById("app")
);