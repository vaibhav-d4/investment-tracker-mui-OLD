import "./App.css";
import Homepage from "./Components/Homepage";
import { Router, Switch, Route } from "react-router-dom";
import { createHashHistory } from "history";
// eslint-disable-next-line no-unused-vars
import Test from "./Components/Test";
import StocksComponent from "./Components/Stocks/StocksComponent";

const hashHistory = createHashHistory();

function App() {
    return (
        <Router history={hashHistory}>
            <Switch>
                <Homepage>
                    <Route exact path="/stocks" component={StocksComponent} />
                </Homepage>
                {/* <Test /> */}
            </Switch>
        </Router>
    );
}

export default App;
