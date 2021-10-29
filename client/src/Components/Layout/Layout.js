/* eslint-disable no-unused-vars */
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import BarChartIcon from "@mui/icons-material/BarChart";
import LockClockIcon from "@mui/icons-material/LockClock";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import HomeIcon from "@mui/icons-material/Home";
import { makeStyles } from "@mui/material";
import { withRouter } from "react-router-dom";
// import App from "./../../App";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useHistory,
    Link,
} from "react-router-dom";
import StocksComponent from "../Stocks/StocksComponent";

// COMPONENTS
import MFComponent from "../Mutual Funds/MFComponent";
import FDComponent from "../Fixed Deposits/FDComponent";
import GoldComponent from "../Gold/GoldComponent";
import HomeComponent from "../Home/HomePage";

import { createBrowserHistory } from "history";

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

const Layout = (props) => {
    const classes = props.useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const itemsList = [
        {
            text: "Home",
            icon: <HomeIcon />,
            linkText: "/home",
        },
        {
            text: "Stocks",
            icon: <ShowChartIcon />,
            linkText: "/stocks",
        },
        {
            text: "Mutual Funds",
            icon: <BarChartIcon />,
            linkText: "/mutualfunds",
        },
        {
            text: "Fixed Deposits",
            icon: <LockClockIcon />,
            linkText: "/fd",
        },
        {
            text: "Gold",
            icon: <ViewModuleIcon />,
            linkText: "/gold",
        },
    ];

    return (
        <>
            <Router>
                <Box sx={{ display: "flex" }}>
                    <CssBaseline />
                    <AppBar position="fixed" open={open}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{
                                    marginRight: "36px",
                                    ...(open && { display: "none" }),
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Link to="/" className={classes.link}>
                                <Typography variant="h5" component="div">
                                    Investment Tracker
                                </Typography>
                            </Link>
                            <Box sx={{ flexGrow: "1" }} />
                            <IconButton
                                onClick={props.toggleColorMode}
                                color="inherit"
                            >
                                {props.theme.palette.mode === "dark" ? (
                                    <Brightness7Icon />
                                ) : (
                                    <Brightness4Icon />
                                )}
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Drawer variant="permanent" open={open}>
                        <DrawerHeader>
                            <IconButton onClick={handleDrawerClose}>
                                {props.theme.direction === "rtl" ? (
                                    <ChevronRightIcon />
                                ) : (
                                    <ChevronLeftIcon />
                                )}
                            </IconButton>
                        </DrawerHeader>
                        <Divider />
                        <List>
                            {itemsList.map((item, index) => {
                                const { text, icon, linkText } = item;
                                return (
                                    <Link
                                        to={linkText}
                                        className={classes.link}
                                    >
                                        <ListItem button key={text}>
                                            {icon && (
                                                <ListItemIcon>
                                                    {icon}
                                                </ListItemIcon>
                                            )}
                                            <ListItemText primary={text} />
                                        </ListItem>
                                    </Link>
                                );
                            })}
                        </List>
                        {/* <Divider /> */}
                    </Drawer>
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <DrawerHeader />
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={() => <Redirect to="/home" />}
                            />
                            <Route
                                exact
                                path="/home"
                                component={HomeComponent}
                            />
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
                            <Route
                                exact
                                path="/gold"
                                component={GoldComponent}
                            />
                        </Switch>
                    </Box>
                </Box>
            </Router>
        </>
    );
};
// export default withRouter(Layout);
export default Layout;
