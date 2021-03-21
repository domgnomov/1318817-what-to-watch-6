export const SHOW_MORE_DEFAULT_COUNT = 8;
export const LIKE_THIS_LIMIT = 4;
export const ALL_FILMS_BY_ACTIVE_GENRE_DEFAULT_COUNT = 0;
export const DEFAULT_GENRE = `All genres`;
export const DEFAULT_FILM = {};
export const RATING_STARS_LENGTH = 10;
export const GENRES_LIMIT = 9;
export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 400;
export const TIMEOUT_LENGTH = 1000;

export const TabType = {
  OVERVIEW: 1,
  DETAILS: 2,
  REVIEWS: 3
};

export const APIRoute = {
  LOGIN: `/login`,
  FILMS: `/films`,
  COMMENT: `/comments`,
  FAVORITE: `/favorite`,
  PROMO: `/promo`,
};

export const AppRoute = {
  LOGIN: `/login`,
  MY_LIST: `/myList`,
  ROOT: `/`,
  FILMS: `/films`,
  FILM: `/films/:id`,
  PLAYERS: `/player`,
  PLAYER: `/player/:id`,
  NOT_FOUND: `/notFound`,
  NOT_AVAILABLE: `/notAvailable`,
  REVIEWS: `/review`,
  REVIEW: `/films/:id/review`
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const DEFAULT_AUTH_INFO = {
  id: 0,
  email: ``,
  name: ``,
  avatarUrl: ``
};

export const MARK = {
  BAD: 0,
  NORMAL: 3,
  GOOD: 5,
  VERY_GOOD: 8,
  AWESOME: 10
};
