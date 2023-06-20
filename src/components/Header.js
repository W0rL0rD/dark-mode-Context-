import React from "react"
import {ThemeContextConsumer} from "./themeContext"

function Header(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                 <header className={`${context.theme}-theme`}>
                 <h2>{context.theme === "light" ? "Light" : "Dark"} Theme</h2>
                 </header>
            )}
        </ThemeContextConsumer>
    )
}

export default Header

// class Header extends Component {
//     static contextType = ThemeContext // Define context type.
//     render() {
//         const theme = this.context
//         return (
//             <header className={`${theme}-theme`}>
//                 {/* Using basic conditional rendering to change text */}
//                 <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
//             </header>
//         )    
//     }
// }