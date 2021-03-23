export default class AuthInfoData {
  constructor(data) {
    this.id = data[`id`];
    this.name = data[`name`];
    this.email = data[`email`];
    this.avatarUrl = data[`avatar_url`];
  }

  static parseAuthInfo(data) {
    return new AuthInfoData(data);
  }
}
