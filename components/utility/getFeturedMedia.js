import movieDB from './movieDB';
import randomNum from './randomNum';

export default async (typeFor, time = 'week') => {
  const { results } = await movieDB(`trending/${typeFor}/${time}`);
  const item = results[randomNum(results.length)];
  const getvideos = await movieDB(`${typeFor}/${item.id}/videos`);

  return { ...item, videos: getvideos.results[0] };
};
