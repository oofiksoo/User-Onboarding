import React from "react";
import "./App.css";
import UserForm from "./Components/userForm";

function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" > { " " } <
        h1 > New User Entry: < /h1>{" "} <
        /header>{" "} <
        UserForm / >
        <
        /div>
    );
}

export default App;