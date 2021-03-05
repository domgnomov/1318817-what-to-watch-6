import {
  loadFilm,
  loadFilms, redirectToFilm,
  redirectToNotFound,
  redirectToRoute,
  requireAuthorization,
  setAuthInfo
} from "./action";
import {APIRoute, AppRoute, AuthorizationStatus} from "../const";
import FilmData from "../components/model/film";
import AuthInfoData from "../components/model/authInfo";

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      dispatch(loadFilms(FilmData.parseFilms(data)));
    })
);

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS + `/` + id)
    .then(({data}) => {
      dispatch(loadFilm(FilmData.parseFilm(data)));
    })
    .catch(() => {
      dispatch(redirectToNotFound(AppRoute.NOT_FOUND));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then((data) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(setAuthInfo(AuthInfoData.parseAuthInfo(data.data)));
    })
    .then(() => {
      dispatch(redirectToRoute(AppRoute.ROOT));
    })
);

export const sendComment = (id, commentPost) => (dispatch, _getState, api) => (
  api.post(APIRoute.COMMENT + `/` + id, commentPost)
    .then(() => {
      dispatch(redirectToFilm(AppRoute.FILMS + `/` + id));
    })
);
