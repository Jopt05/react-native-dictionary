import { createContext, useReducer } from "react";
import { themeReducer } from "./themeReducer";

// 1. Definir como luce solamente el authstate
export interface ThemeState {
    isDarkMode: boolean;
}

// 2. Estado inicial de auth
export const themeInitialState: ThemeState = {
    isDarkMode: false,
}

// 4. Lo usaremos para decir a React cómo luce el context
export interface ThemeStateProps {
    themeState: ThemeState;
    changeTheme: () => void;
}

// 3. Crear el contexto
export const ThemeContext = createContext({} as ThemeStateProps);

// 5. Exponder el provedor de estado 
export const ThemeProvider = ({ children }: any) => {

    const [themeState, dispatch] = useReducer( themeReducer, themeInitialState);

    function changeTheme() {
        dispatch({
            type: 'changeTheme'
        });
    };

    return (
        <ThemeContext.Provider
            value={{
              themeState: themeState,
              changeTheme: changeTheme
            }}
        >
            { children }
        </ThemeContext.Provider>
    )
}