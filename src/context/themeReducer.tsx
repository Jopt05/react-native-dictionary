import { ThemeState } from "./themeContext";

// Especifica las acciones posibles
type AuthAction = { type: 'setLight' } | { type: 'setDark' };

export const themeReducer = (state: ThemeState, action: AuthAction): ThemeState => {
    
    switch (action.type) {
        case 'setDark':
            return {
                ...state,
                isDarkMode: true
            }

        case 'setLight':
            return {
                ...state,
                isDarkMode: false
            }
    
        default:
            return state;
    }

}