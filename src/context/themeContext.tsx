import { createContext, useEffect, useReducer } from "react";
import { themeReducer } from "./themeReducer";
import { useColorScheme } from "react-native";

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
    setLightTheme: () => void;
    setDarkTheme: () => void;
}

// 3. Crear el contexto
export const ThemeContext = createContext({} as ThemeStateProps);

// 5. Exponder el provedor de estado 
export const ThemeProvider = ({ children }: any) => {

    const colorsScheme = useColorScheme();

    const [themeState, dispatch] = useReducer(themeReducer, themeInitialState);

    function setLightTheme() {
        dispatch({
            type: 'setLight'
        });
    }

    function setDarkTheme() {
        dispatch({
            type: 'setDark'
        })
    }

    useEffect(() => {
        (colorsScheme == 'light')
          ? setLightTheme()
          : setDarkTheme()
      }, [colorsScheme])
    

    return (
        <ThemeContext.Provider
            value={{
              themeState: themeState,
              setDarkTheme,
              setLightTheme
            }}
        >
            { children }
        </ThemeContext.Provider>
    )
}