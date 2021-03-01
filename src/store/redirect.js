import {ActionType} from "./action";
import browserHistory from "../browser-history";


export const redirect = (_store) => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }
  if (action.type === ActionType.REDIRECT_TO_NOT_FOUND) {
    browserHistory.push(action.payload);
  }

  return next(action);
};
