export const getPicture = (date) => {
  let api_key = process.env.REACT_APP_API_KEY;
  return fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${date}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if ('code' in data) {
        return { error: { msg: data.msg } };
      } else if ('error' in data) {
        return { error: { msg: 'There was an error, please try again.' } };
      }
      return data;
    })
    .catch(() => {
      return { error: { msg: 'There was an error, please try again.' } };
    });
};
