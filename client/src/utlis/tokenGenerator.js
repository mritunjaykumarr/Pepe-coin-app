// utils/tokenUtils.js
const getOrCreateToken = () => {
  let token = localStorage.getItem("userToken");

  if (!token) {
    token = generateRandomToken(10);
    localStorage.setItem("userToken", token);
  }

  return token;
};

function generateRandomToken(length = 10) {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    token += charset[randomIndex];
  }
  return token;
}

export default getOrCreateToken;
