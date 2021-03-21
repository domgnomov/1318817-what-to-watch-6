import {formatDate, formatTextDate} from "../utils/date";

export default class ReviewData {
  constructor(data) {
    this.id = data[`id`];
    this.userName = data[`user`].name;
    this.rating = data[`rating`];
    this.comment = data[`comment`];
    this.date = formatDate(data[`date`]);
    this.textDate = formatTextDate(data[`date`]);
  }

  static parseReview(data) {
    return new ReviewData(data);
  }

  static parseReviews(data) {
    return data.map(ReviewData.parseReview);
  }
}
