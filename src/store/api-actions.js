import {
  loadFilm, loadPromo,
  redirectToFilm, redirectToNotAvailable,
  redirectToRoute,
  requireAuthorization,
  setAuthInfo, setReviews, setServerError
} from "./action";
import {APIRoute, AppRoute, AuthorizationStatus} from "../const";
import FilmData from "../components/model/film";
import AuthInfoData from "../components/model/authInfo";
import {initFilms, updateFavoriteFilms} from "../components/model/dataService";
import ReviewData from "../components/model/review";

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      initFilms(dispatch, data);
    })
    .catch(() => {
      console.log(' redirect fetchFilmList');
      dispatch(setServerError(false));
      dispatch(redirectToNotAvailable(AppRoute.NOT_AVAILABLE));
    })
);

export const fetchFavoriteFilmList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => {
      updateFavoriteFilms(dispatch, data);
    })
    .catch(() => {
      console.log(' redirect fetchFavoriteFilmList');
      dispatch(redirectToNotAvailable(AppRoute.NOT_AVAILABLE));
    })
);

export const fetchPromo = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS + APIRoute.PROMO)
    .then(({data}) => {
      dispatch(loadPromo(FilmData.parseFilm(data)));
    })
    .catch(() => {
      console.log(' redirect fetchPromo');
      dispatch(redirectToNotAvailable(AppRoute.NOT_AVAILABLE));
    })
);

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS + `/` + id)
    .then(({data}) => {
      dispatch(loadFilm(FilmData.parseFilm(data)));
    })
    .catch(() => {
      console.log(' redirect fetchFilm');
      dispatch(redirectToNotAvailable(AppRoute.NOT_AVAILABLE));
    })
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.COMMENT + `/` + id)
    .then(({data}) => {
      dispatch(setReviews(ReviewData.parseReviews(data)));
    })
    .catch(() => {
      console.log(' redirect fetchReviews');
      dispatch(redirectToNotAvailable(AppRoute.NOT_AVAILABLE));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then((data) => {
      authorize(dispatch, data);
    })
    .catch(() => {
      console.log(' redirect checkAuth');
      //dispatch(redirectToNotAvailable(AppRoute.NOT_AVAILABLE));
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
      console.log(' redirect login');
      dispatch(redirectToNotAvailable(AppRoute.NOT_AVAILABLE));
    })
);

export const sendComment = (id, commentPost) => (dispatch, _getState, api) => (
  api.post(APIRoute.COMMENT + `/` + id, commentPost)
    .then(() => {
      dispatch(redirectToFilm(AppRoute.FILMS + `/` + id));
    })
    .catch(() => {
      console.log(' redirect sendComment');
      dispatch(redirectToNotAvailable(AppRoute.NOT_AVAILABLE));
    })
);

export const changeFavoriteStatus = (id, status) => (dispatch, _getState, api) => (
  api.post(APIRoute.FAVORITE + `/` + id + `/` + status)
    .then(({data}) => {
      dispatch(loadFilm(FilmData.parseFilm(data)));
    })
    .catch(() => {
      console.log(' redirect changeFavoriteStatus');
      dispatch(redirectToNotAvailable(AppRoute.NOT_AVAILABLE));
    })
);

const authorize = (dispatch, data) => {
  dispatch(requireAuthorization(AuthorizationStatus.AUTH));
  dispatch(setAuthInfo(AuthInfoData.parseAuthInfo(data.data)));
};
