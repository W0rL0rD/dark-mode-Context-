import React from "react"
import {ThemeContextConsumer} from "./themeContext"

function Button(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Switch Theme</button>
            )}
        </ThemeContextConsumer>
    )    
}

export default Button


// IMPLEMENTATION #3
// import ThemeContext from "./themeContext"
// import PropTypes from "prop-types"

// function Button(props) {
//         return(
//             <button className={`${props.theme}-theme`}>Switch Theme</button>
//         )
//     }

// // Ensures we have a valid theme type by restricting the choices to two.
// Button.propTypes = {
//     theme: PropTypes.oneOf(["light","dark"])
// }

// // Assign default color theme.
// Button.defaultProps = {
//     theme: "light"
// }

// IMPLEMENTATION #2:
// With this approach, we make the ThemeContext work with a function type.
// function Button(props) {
//     const theme = ThemeContext
//     return(
//         <ThemeContext.Consumer>
//             {/* Child context of this consumer is a function which calls a function. '()' is an implicit return. */}
//             {theme => (
//                 <button className={`${theme}-theme`}>Switch Theme</button>
//             )}
//         </ThemeContext.Consumer>
//     )
// }

// IMPLEMENTATION #1
// class Button extends Component {
//     render() {
//         const theme = this.context;
//         return (
//             // Changes className to change the CSS used on button depending on theme in the given context.
//             <button className={`${theme}-theme`}>Switch Theme</button>
//         )    
//     }
// }

// // Specifies the context used
// Button.contextType = ThemeContext

// // A problem with this is that ThemeContext only works with class components. If we have something like function Button () {} then it wouldn't work as it is a function.