import React from "react";
import ReactDOM from "react-dom";

import Home from "./routes/Home";
import LoggedIn from "./routes/LoggedIn";
import NotLoggedIn from "./routes/NotLoggedIn";
import { BrowserRouter as Router, Route, Link }  from "react-router-dom";

import "./styles.css";

const App = () => (
    <div className="App">
        <Router>
            <Route exact path="/" component={Home} />
            <Route path="/logged-in" component={LoggedIn} />
            <Route path="/not-logged-in" component={NotLoggedIn} />
        </Router>
    </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);