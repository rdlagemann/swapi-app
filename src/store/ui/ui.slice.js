const INITIAL_STATE = () => ({
  darkMode: false,
});

export default function uiSlice(state = INITIAL_STATE(), action) {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
}

const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";
export const toggleDarkMode = () => ({ type: TOGGLE_DARK_MODE });

export const getDarkMode = (state) => state.ui.darkMode;
