import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"; // include the CSS file.
import App from "./App"
import {ThemeContextProvider} from "./components/themeContext"

ReactDOM.render(
    <ThemeContextProvider value={"dark"}>
        <App />
    </ThemeContextProvider>, 
    document.getElementById("root")
)
