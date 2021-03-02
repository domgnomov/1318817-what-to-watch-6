import {ActionCreator} from "./action";
import {APIRoute} from "../const";
import FilmData from "../components/model/film";

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      dispatch(ActionCreator.loadFilms(FilmData.parseFilms(data)));
    })
);
