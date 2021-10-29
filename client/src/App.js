/* eslint-disable no-unused-vars */
import "./App.css";

// MUI
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Paper } from "@mui/material";

// REACT
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { useState } from "react";

// COMPONENTS
import Layout from "./Components/Layout/Layout";
import StocksComponent from "./Components/Stocks/StocksComponent";
import MFComponent from "./Components/Mutual Funds/MFComponent";
import FDComponent from "./Components/Fixed Deposits/FDComponent";
import GoldComponent from "./Components/Gold/GoldComponent";
import HomeComponent from "./Components/Home/Home";

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
    return (
        <ThemeProvider theme={theme}>
            <Paper style={{ height: "100vh", borderRadius: "0" }}>
                <Router>
                    <Layout toggleColorMode={toggleColorMode} theme={theme} />
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => <Redirect to="/home" />}
                        />
                        <Route exact path="/home" component={HomeComponent} />
                        <Route
                            exact
                            path="/stocks"
                            component={StocksComponent}
                        />
                        <Route
                            exact
                            path="/mutualfunds"
                            component={MFComponent}
                        />
                        <Route exact path="/fd" component={FDComponent} />
                        <Route exact path="/gold" component={GoldComponent} />
                    </Switch>
                </Router>
            </Paper>
        </ThemeProvider>
    );
}
export default App;
