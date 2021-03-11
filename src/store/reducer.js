import {combineReducers} from 'redux';
import {filmReducer} from "./film-reducer";
import {authReducer} from "./auth-reducer";
import {currentFilmReducer} from "./current-film-reducer";


export const NameSpace = {
  FILM: `FILM`,
  CURRENT_FILM: `CURRENT_FILM`,
  AUTH: `AUTH`,
};

export default combineReducers({
  [NameSpace.FILM]: filmReducer,
  [NameSpace.CURRENT_FILM]: currentFilmReducer,
  [NameSpace.AUTH]: authReducer,
});
