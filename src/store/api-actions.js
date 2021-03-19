import {
  loadFilm, loadPromo,
  redirectToFilm, redirectToNotAvailable,
  redirectToRoute,
  requireAuthorization,
  setAuthInfo, setIsFormDisabled, setReviews, setServerError
} from "./action";
import {APIRoute, AppRoute, AuthorizationStatus} from "../const";
import FilmData from "../components/model/film";
import AuthInfoData from "../components/model/authInfo";
import {initFilms, updateFavoriteFilms} from "../components/model/dataService";
import ReviewData from "../components/model/review";

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      /*if (Math.round(Math.random()) !== 1) {
        throw ``;
      }*/
      initFilms(dispatch, data);
    })
    .catch(() => {
      console.log(' redirect fetchFilmList');
      setErrorStatusAndRedirect(dispatch);
    })
);

export const fetchFavoriteFilmList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => {
      updateFavoriteFilms(dispatch, data);
    })
    .catch(() => {
      console.log(' redirect fetchFavoriteFilmList');
      setErrorStatusAndRedirect(dispatch);
    })
);

export const fetchPromo = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS + APIRoute.PROMO)
    .then(({data}) => {
      dispatch(loadPromo(FilmData.parseFilm(data)));
    })
    .catch(() => {
      console.log(' redirect fetchPromo');
      setErrorStatusAndRedirect(dispatch);
    })
);

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS + `/` + id)
    .then(({data}) => {
      dispatch(loadFilm(FilmData.parseFilm(data)));
    })
    .catch(() => {
      console.log(' redirect fetchFilm');
      setErrorStatusAndRedirect(dispatch);
    })
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.COMMENT + `/` + id)
    .then(({data}) => {
      dispatch(setReviews(ReviewData.parseReviews(data)));
    })
    .catch(() => {
      console.log(' redirect fetchReviews');
      setErrorStatusAndRedirect(dispatch);
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then((data) => {
      authorize(dispatch, data);
    })
    .catch(() => {
      console.log(' redirect checkAuth');
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
      console.log(' redirect login');
      setErrorStatusAndRedirect(dispatch);
    })
);

export const sendComment = (id, commentPost) => (dispatch, _getState, api) => (
  api.post(APIRoute.COMMENT + `/` + id, commentPost)
    .then(() => {
      console.log(' !!!!! sendComment');
      dispatch(redirectToFilm(AppRoute.FILMS + `/` + id));
      dispatch(setIsFormDisabled(false));
    })
    .catch(() => {
      console.log(' redirect sendComment');
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
      console.log(' redirect changeFavoriteStatus');
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
