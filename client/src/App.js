/* eslint-disable no-unused-vars */
import "./App.css";

// MUI
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

// REACT
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useHistory,
} from "react-router-dom";
import { useState } from "react";

// COMPONENTS
import Layout from "./Components/Layout/Layout";
import MFComponent from "./Components/Mutual Funds/MFComponent";
import FDComponent from "./Components/Fixed Deposits/FDComponent";
import GoldComponent from "./Components/Gold/GoldComponent";
import HomeComponent from "./Components/Home/HomePage";

function App() {
    const [themeMode, setMode] = useState("dark");
    const toggleColorMode = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };
    const theme = createTheme({
        palette: {
            mode: themeMode,
        },
    });
    const useStyles = makeStyles((theme) => ({
        link: {
            textDecoration: "none",
            color: theme.palette.text.primary,
        },
    }));

    return (
        <Router>
            <ThemeProvider theme={theme}>
                <Paper style={{ height: "100vh", borderRadius: "0" }}>
                    <Layout
                        toggleColorMode={toggleColorMode}
                        theme={theme}
                        useStyles={useStyles}
                    />
                </Paper>
            </ThemeProvider>
        </Router>
    );
}
export default App;
