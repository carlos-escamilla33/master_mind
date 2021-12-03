import React, { useState } from "react";
import ReactDom from "react-dom";
import getRandomNums from "./randomApi/randomApi";
const App = () => {
    return (
        <>
            <h1>hello world</h1>
        </>
    )
}

ReactDom.render(
    <App />,
    document.getElementById("app")
);