import ReactDom from "react-dom";
import App from "./App";
import { UserProvider } from "./context/UserContext";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
    palette: {
        background: {
            default: "rgb(83 82 84)"
        }
    }
})

ReactDom.render(
    <ThemeProvider theme={theme}>
        <UserProvider>
            <CssBaseline />
            <App />
        </UserProvider>
    </ThemeProvider>,
    document.getElementById("app")
);