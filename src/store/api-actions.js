import {ActionCreator} from "./action";
import {APIRoute, AppRoute, AuthorizationStatus} from "../const";
import FilmData from "../components/model/film";

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      dispatch(ActionCreator.loadFilms(FilmData.parseFilms(data)));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => {
      debugger;
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    })
    .then(() => {
      debugger;
      dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT));
    })
);
