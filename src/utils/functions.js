import axios from 'axios';

export const getParamValues = (url) => {
  return url
    .slice(1)
    .split('&')
    .reduce((prev, curr) => {
      const [title, value] = curr.split('=');
      prev[title] = value;
      return prev;
    }, {});
};

export const setAuthHeader = () => {
  try {
    const access_token = localStorage.getItem('access_token');

    if (access_token) {
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${access_token}`;
    }
  } catch (error) {
    console.log('Error setting auth', error);
  }
};

export const getTimeInMinute = (ms) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
}
