import {combineReducers} from 'redux';
import {filmReducer} from "./film-reducer";
import {authReducer} from "./auth-reducer";


export const NameSpace = {
  FILM: `FILM`,
  AUTH: `AUTH`,
};

export default combineReducers({
  [NameSpace.FILM]: filmReducer,
  [NameSpace.AUTH]: authReducer,
});
