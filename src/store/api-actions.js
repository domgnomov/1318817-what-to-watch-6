import {
  loadFilm, loadPromo,
  redirectToFilm, redirectToNotAvailable,
  redirectToRoute,
  requireAuthorization,
  setAuthInfo, setIsFormDisabled, setReviews, setServerError
} from "./action";
import {APIRoute, AppRoute, AuthorizationStatus} from "../const/const";
import FilmData from "../model/film";
import AuthInfoData from "../model/authInfo";
import {initFilms, updateFavoriteFilms} from "../services/data";
import ReviewData from "../model/review";

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      initFilms(dispatch, data);
    })
    .catch(() => {
      setErrorStatusAndRedirect(dispatch);
    })
);

export const fetchFavoriteFilmList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => {
      updateFavoriteFilms(dispatch, data);
    })
    .catch(() => {
      setErrorStatusAndRedirect(dispatch);
    })
);

export const fetchPromo = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS + APIRoute.PROMO)
    .then(({data}) => {
      dispatch(loadPromo(FilmData.parseFilm(data)));
    })
    .catch(() => {
      setErrorStatusAndRedirect(dispatch);
    })
);

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS + `/` + id)
    .then(({data}) => {
      dispatch(loadFilm(FilmData.parseFilm(data)));
    })
    .catch(() => {
      setErrorStatusAndRedirect(dispatch);
    })
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.COMMENT + `/` + id)
    .then(({data}) => {
      dispatch(setReviews(ReviewData.parseReviews(data)));
    })
    .catch(() => {
      setErrorStatusAndRedirect(dispatch);
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then((data) => {
      authorize(dispatch, data);
    })
    .catch(() => {
      dispatch(redirectToRoute(AppRoute.ROOT));
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then((data) => {
      authorize(dispatch, data);
    })
    .then(() => {
      dispatch(redirectToRoute(AppRoute.ROOT));
    })
    .catch(() => {
      setErrorStatusAndRedirect(dispatch);
    })
);

export const sendComment = (id, commentPost) => (dispatch, _getState, api) => (
  api.post(APIRoute.COMMENT + `/` + id, commentPost)
    .then(() => {
      dispatch(redirectToFilm(AppRoute.FILMS + `/` + id));
      dispatch(setIsFormDisabled(false));
    })
    .catch(() => {
      setErrorStatusAndRedirect(dispatch);
      dispatch(setIsFormDisabled(false));
    })
);

export const changeFavoriteStatus = (id, status) => (dispatch, _getState, api) => (
  api.post(APIRoute.FAVORITE + `/` + id + `/` + status)
    .then(({data}) => {
      dispatch(loadFilm(FilmData.parseFilm(data)));
    })
    .catch(() => {
      setErrorStatusAndRedirect(dispatch);
    })
);

const setErrorStatusAndRedirect = (dispatch) => {
  dispatch(setServerError(true));
  dispatch(redirectToNotAvailable(AppRoute.NOT_AVAILABLE));
};

const authorize = (dispatch, data) => {
  dispatch(requireAuthorization(AuthorizationStatus.AUTH));
  dispatch(setAuthInfo(AuthInfoData.parseAuthInfo(data.data)));
};
