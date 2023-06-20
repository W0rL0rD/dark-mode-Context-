import React, {Component} from "react"
// Used destructuring syntax to get Provider and Consumer from createContext.
const {Provider, Consumer} = React.createContext()

class ThemeContextProvider extends Component {

	state = {
		theme: "dark"
	}

	// Method to toggle the themes from light to dark and vice versa
	toggleTheme = () => {
		this.setState(prevState => {
			return {
				theme: prevState.theme === "light" ? "dark" : "light"
			}
		})
	}


    render() {
        return (
            <Provider value={{theme: this.state.theme, toggleTheme: this.toggleTheme}}>
							{/* The value is provided to the children of the props */}
                {this.props.children}
            </Provider>
        )
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}

// // Creates Context
// const ThemeContext = React.createContext()

// export default ThemeContext