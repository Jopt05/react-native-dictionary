import { ThemeState } from "./themeContext";

// Especifica las acciones posibles
type AuthAction = { 
    type: 'changeTheme' 
};

export const themeReducer = (state: ThemeState, action: AuthAction): ThemeState => {
    
    switch (action.type) {
        case 'changeTheme':
            return {
                ...state,
                isDarkMode: !state.isDarkMode
            }
    
        default:
            return state;
    }

}