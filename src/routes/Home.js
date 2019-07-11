import React, { useState } from "react";
import { browserHistory } from "react-router";

const Home = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const updateUsername = e => {
        const {
            target: { value }
        } = e;
        setUsername(value);
    };
    const updatePassword = e => {
        const {
            target: { value }
        } = e;
        setPassword(value);
    };
    const submitForm = e => {
        e.preventDefault();
        console.log(username, password);
        if (username === "foo" && password === "bar") {
            window.location.href = "/logged-in";
        } else {
            window.location.href = "/not-logged-in";
        }
    };

    return (
        <form onSubmit={submitForm}>
            <span>Login Page</span>
            <input
                type="text"
                name="username"
                value={username}
                onChange={updateUsername}
                placeholder="user id"
            />
            <input
                type="password"
                name="password"
                value={password}
                onChange={updatePassword}
                placeholder="password"
            />
            <input type="submit" />
        </form>
    );
};

export default Home;
