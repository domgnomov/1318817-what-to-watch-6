export default class ReviewData {
  constructor(data) {
    this.id = data[`id`];
    this.userId = data[`user`].id;
    this.userName = data[`user`].name;
    this.rating = data[`rating`];
    this.comment = data[`comment`];
    this.date = data[`date`];
  }

  static parseReview(data) {
    return new ReviewData(data);
  }
}
