import config from '../data/config.json';

export default {
  request(url) {
    let fullUrl = `https://api.themoviedb.org/3${url}`;
    fullUrl += fullUrl.indexOf('?') !== -1 ? '&' : '?';
    fullUrl += `api_key=${config.apiKey}`;

    return fetch(fullUrl).then(res => {
      return res.json();
    });
  },
};
