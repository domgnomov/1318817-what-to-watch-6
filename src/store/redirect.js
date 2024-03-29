import {ActionType} from "./action";
import browserHistory from "../services/browser-history";


export const redirect = (_store) => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }
  if (action.type === ActionType.REDIRECT_TO_NOT_FOUND) {
    browserHistory.push(action.payload);
  }
  if (action.type === ActionType.REDIRECT_TO_FILM) {
    browserHistory.push(action.payload);
  }
  if (action.type === ActionType.REDIRECT_TO_NOT_AVAILABLE) {
    browserHistory.push(action.payload);
  }

  return next(action);
};
