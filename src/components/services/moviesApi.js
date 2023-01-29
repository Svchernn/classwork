import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/trending/all/day',
  params: { api_key: 'c1b8c874be54ebc5c34c225dbd6a36f5' },
});

export async function fetchMovies(page) {
  return instance.get('', {
    params: {
      page,
      language: 'en',
    },
  });
}

export default fetchMovies;
