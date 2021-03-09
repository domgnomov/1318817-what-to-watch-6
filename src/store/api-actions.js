import {
  loadFilm, loadPromo,
  redirectToFilm,
  redirectToNotFound,
  redirectToRoute,
  requireAuthorization,
  setAuthInfo
} from "./action";
import {APIRoute, AppRoute, AuthorizationStatus} from "../const";
import FilmData from "../components/model/film";
import AuthInfoData from "../components/model/authInfo";
import {initFilms, updateFavoriteFilms} from "../components/model/dataService";

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      initFilms(dispatch, data);
    })
);

export const fetchFavoriteFilmList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => {
      debugger;
      updateFavoriteFilms(dispatch, data);
    })
);

export const fetchPromo = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS + APIRoute.PROMO)
    .then(({data}) => {
      dispatch(loadPromo(FilmData.parseFilm(data)));
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
    .then((data) => {
      authorize(dispatch, data);
    })
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then((data) => {
      authorize(dispatch, data);
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

export const changeFavoriteStatus = (id, status) => (dispatch, _getState, api) => (
  api.post(APIRoute.FAVORITE + `/` + id + `/` + status)
    .then(({data}) => {
      debugger;
      dispatch(loadFilm(FilmData.parseFilm(data)));
    })
);

const authorize = (dispatch, data) => {
  dispatch(requireAuthorization(AuthorizationStatus.AUTH));
  dispatch(setAuthInfo(AuthInfoData.parseAuthInfo(data.data)));
};
