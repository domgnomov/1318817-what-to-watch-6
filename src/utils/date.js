import moment from "moment";

export const formatDate = (date) => {
  return moment(date).format(`YYYY-MM-DD`);
};

export const formatTextDate = (date) => {
  return moment(date).format(`MMMM DD, YYYY`);
};

export const formatWithSeconds = (s) => {
  let h = Math.floor(s / 60 / 60);
  h = (h >= 10) ? h : `0` + h;
  let m = Math.floor(s / 60);
  m = (m >= 10) ? m : `0` + m;
  s = Math.floor(s % 60);
  s = (s >= 10) ? s : `0` + s;
  return h + `:` + m + `:` + s;
};

export const formatWithoutSeconds = (s) => {
  let h = Math.floor(s / 60 / 60);
  let m = Math.floor(s / 60);
  return h + `h ` + m + `m`;
};
