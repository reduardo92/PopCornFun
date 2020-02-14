import movieDB from '../utility/movieDB';

export const API_KEY = process.env.API_KEY;
export const BASE_URL = 'https://api.themoviedb.org/3/';
export const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
// Movie DB

export function getMovie(id, param) {
  const movie = {
    details: `/movie/${id}`,
    accStates: `/movie/${id}/account_states`,
    alterTitles: `/movie/${id}/alternative_titles`,
    changes: `/movie/${id}/changes`,
    credits: `/movie/${id}/credits`,
    externalId: `/movie/${id}/external_ids`,
    images: `/movie/${id}/images`,
    Keywords: `/movie/${id}/keywords`,
    ReleaseDate: `/movie/${id}/release_dates`,
    videos: `/movie/${id}/videos`,
    translations: `/movie/${id}/translations`,
    recommend: `/movie/${id}/recommendations`,
    similar: `/movie/${id}/similar`,
    reviews: `/movie/${id}/reviews`,
    list: `/movie/${id}/lists`,
    rate: `/movie/${id}/rating`,
    rating: `/movie/${id}/rating`,
    latest: `/movie/latest`,
    now_playing: `/movie/now_playing`,
    popular: `/movie/popular`,
    top_rated: `/movie/top_rated`,
    upcoming: `/movie/upcoming`
  };

  const tv = {
    details: `/tv/${id}`
  };

  return movie[param];
}
