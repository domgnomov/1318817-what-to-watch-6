import {ActionCreator} from "./action";
import {APIRoute, AppRoute, AuthorizationStatus} from "../const";
import FilmData from "../components/model/film";
import AuthInfoData from "../components/model/authInfo";

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      dispatch(ActionCreator.loadFilms(FilmData.parseFilms(data)));
    })
);

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS + `/` + id)
    .then(({data}) => {
      dispatch(ActionCreator.loadFilm(FilmData.parseFilm(data)));
    })
    .catch(() => {
      dispatch(ActionCreator.redirectToNotFound(AppRoute.NOT_FOUND));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then((data) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.setAuthInfo(AuthInfoData.parseAuthInfo(data.data)));
    })
    .then(() => {
      dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT));
    })
);

export const sendComment = (id, commentPost) => (dispatch, _getState, api) => (
  api.post(APIRoute.COMMENT + `/` + id, commentPost)
    .then(() => {
      dispatch(ActionCreator.redirectToFilm(AppRoute.FILMS + `/` + id));
    })
);
