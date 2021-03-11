import {
  loadFilm, loadPromo,
  redirectToFilm, redirectToNotAvailable,
  redirectToRoute,
  requireAuthorization,
  setAuthInfo, setDataLoadStatus, setReviews, setServerError
} from "./action";
import {APIRoute, AppRoute, AuthorizationStatus} from "../const";
import FilmData from "../components/model/film";
import AuthInfoData from "../components/model/authInfo";
import {initFilms, updateFavoriteFilms} from "../components/model/dataService";
import ReviewData from "../components/model/review";

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      //initFilms(dispatch, data);
      throw ``;
    })
    .catch(() => {
      debugger;
      dispatch(setDataLoadStatus(true));
      dispatch(redirectToNotAvailable(AppRoute.NOT_AVAILABLE));
    })
);

export const fetchFavoriteFilmList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => {
      updateFavoriteFilms(dispatch, data);
    })
    .catch(() => {
      debugger;
      dispatch(setDataLoadStatus(true));
      dispatch(redirectToNotAvailable(AppRoute.NOT_AVAILABLE));
    })
);

export const fetchPromo = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS + APIRoute.PROMO)
    .then(({data}) => {
      dispatch(loadPromo(FilmData.parseFilm(data)));
    })
    .catch(() => {
      debugger;
      dispatch(setDataLoadStatus(true));
      dispatch(redirectToNotAvailable(AppRoute.NOT_AVAILABLE));
    })
);

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS + `/` + id)
    .then(({data}) => {
      debugger;
      dispatch(loadFilm(FilmData.parseFilm(data)));
    })
    .catch(() => {
      dispatch(setDataLoadStatus(true));
      dispatch(redirectToNotAvailable(AppRoute.NOT_AVAILABLE));
    })
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.COMMENT + `/` + id)
    .then(({data}) => {
      dispatch(setReviews(ReviewData.parseReviews(data)));
    })
    .catch(() => {
      debugger;
      dispatch(setDataLoadStatus(true));
      dispatch(redirectToNotAvailable(AppRoute.NOT_AVAILABLE));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then((data) => {
      authorize(dispatch, data);
    })
    .catch(() => {
      debugger;
      dispatch(setDataLoadStatus(true));
      dispatch(redirectToNotAvailable(AppRoute.NOT_AVAILABLE));
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
      debugger;
      dispatch(setDataLoadStatus(true));
      dispatch(redirectToNotAvailable(AppRoute.NOT_AVAILABLE));
    })
);

export const sendComment = (id, commentPost) => (dispatch, _getState, api) => (
  api.post(APIRoute.COMMENT + `/` + id, commentPost)
    .then(() => {
      dispatch(redirectToFilm(AppRoute.FILMS + `/` + id));
    })
    .catch(() => {
      debugger;
      dispatch(setDataLoadStatus(true));
      dispatch(redirectToNotAvailable(AppRoute.NOT_AVAILABLE));
    })
);

export const changeFavoriteStatus = (id, status) => (dispatch, _getState, api) => (
  api.post(APIRoute.FAVORITE + `/` + id + `/` + status)
    .then(({data}) => {
      dispatch(loadFilm(FilmData.parseFilm(data)));
    })
    .catch(() => {
      debugger;
      dispatch(setDataLoadStatus(true));
      dispatch(redirectToNotAvailable(AppRoute.NOT_AVAILABLE));
    })
);

const authorize = (dispatch, data) => {
  dispatch(requireAuthorization(AuthorizationStatus.AUTH));
  dispatch(setAuthInfo(AuthInfoData.parseAuthInfo(data.data)));
};
