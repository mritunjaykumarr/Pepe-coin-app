// utils/tokenUtils.j
const generateRandomToken = function () {
  // const charset =
  //   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  // let token = "";
  // for (let i = 0; i < length; i++) {
  //   const randomIndex = Math.floor(Math.random() * charset.length);
  //   token += charset[randomIndex];
  // }
  // return token;

  return 'xxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export default generateRandomToken;
