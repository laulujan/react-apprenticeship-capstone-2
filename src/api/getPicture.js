export const getPicture = (date) => {
  let api_key = process.env.REACT_APP_API_KEY;
  //api_key = ""
  return fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${date}`
  ).then((response) => response.json());
};
