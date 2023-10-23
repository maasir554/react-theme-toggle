import { createContext, useContext } from "react";


// First, let us define the context. it can have anyathing inside it, here we are initiating it with an Object.

const ThemeContext = createContext({ThemeMode:"light", darkTheme: () => {}, lightTheme: () => {} });

// defining the context provider here itself. we could've used it in the App.jsx directly ex: <ThemeContext.Provider></ThemeContext.Provider>
// but this is a cleaner way out.

const ThemeProvider = ThemeContext.Provider;

// again, we could've used ThemeContext() directly in the required file. but just for demonstration...
 
const useTheme = () => {
    return useContext( ThemeContext );
}

export { ThemeContext, ThemeProvider, useTheme }
