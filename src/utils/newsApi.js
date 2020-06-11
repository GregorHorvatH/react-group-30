import axios from 'axios';

export const getNews = (query = '', page = 0) =>
  axios
    .get(
      `https://hn.algolia.com/api/v1/search?query=${query}&hitsPerPage=5&page=${page}`,
    )
    .then((res) => ({
      // ...res.data,
      nbPages: res.data.nbPages,
      hits: res.data.hits.filter((item) => item.url !== null),
    }));
