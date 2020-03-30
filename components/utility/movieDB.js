import axios from 'axios';
import { API_KEY, BASE_URL } from '../context/types';

const movieDB = async (url, query = '', method = 'get') => {
  try {
    const { data } = await axios[method](
      `${BASE_URL}${url}?${API_KEY}&language=en-US${
        query == '' ? '' : `&${query}`
      }`
    );

    return data;
  } catch (error) {
    console.log(error);
    return {
      error: 'sorry something went wrong'
    };
  }
};

export default movieDB;
