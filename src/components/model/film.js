import {MARK} from "../../const";

export default class FilmData {
  constructor(data) {
    this.id = data[`id`];
    this.name = data[`name`];
    this.posterImage = data[`poster_image`];
    this.previewImage = data[`preview_image`];
    this.backgroundImage = data[`background_image`];
    this.backgroundColor = data[`background_color`];
    this.videoLink = data[`video_link`];
    this.previewVideoLink = data[`preview_video_link`];
    this.description = data[`description`];
    this.rating = data[`rating`];
    this.mark = getMark(data[`rating`]);
    this.scoresCount = data[`scores_count`];
    this.director = data[`director`];
    this.runTime = data[`run_time`];
    this.genre = data[`genre`];
    this.released = data[`released`];
    this.isFavorite = data[`is_favorite`];
    this.starring = data[`starring`];
  }

  static parseFilm(data) {
    return new FilmData(data);
  }

  static parseFilms(data) {
    return data.map(FilmData.parseFilm);
  }
}

const getMark = (rating) => {
  const ratingValue = parseFloat(rating);
  if (ratingValue < parseFloat(MARK.NORMAL)) {
    return `Bad`;
  } else if (ratingValue < parseFloat(MARK.GOOD)) {
    return `Normal`;
  } else if (ratingValue < parseFloat(MARK.VERY_GOOD)) {
    return `Good`;
  } else if (ratingValue < parseFloat(MARK.AWESOME)) {
    return `Very good`;
  } else {
    return `Awesome`;
  }
};
