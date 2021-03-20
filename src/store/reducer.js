import {combineReducers} from 'redux';
import {filmReducer} from "./film-reducer";
import {authReducer} from "./auth-reducer";
import {reviewReducer} from "./review-reducer";
import {errorReducer} from "./error-reducer";


export const NameSpace = {
  FILM: `FILM`,
  AUTH: `AUTH`,
  REVIEW: `REVIEW`,
  ERROR: `ERROR`,
};

export default combineReducers({
  [NameSpace.FILM]: filmReducer,
  [NameSpace.AUTH]: authReducer,
  [NameSpace.REVIEW]: reviewReducer,
  [NameSpace.ERROR]: errorReducer,
});
