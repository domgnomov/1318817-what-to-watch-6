import {combineReducers} from 'redux';
import {mainReducer} from "./main-reducer";
import {authReducer} from "./auth-reducer";


export const NameSpace = {
  MAIN: `MAIN`,
  AUTH: `AUTH`,
};

export default combineReducers({
  [NameSpace.MAIN]: mainReducer,
  [NameSpace.AUTH]: authReducer,
});
