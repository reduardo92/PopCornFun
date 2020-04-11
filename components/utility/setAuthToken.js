import axios from 'axios';
import Router from 'next/router';
import { SITE_URL } from '../context/types';

async function getAuthToken(url, ctx) {
  const cookie = ctx.req?.headers.cookie;

  if (!cookie) {
    return { data: false };
  }

  const data = await axios(`${SITE_URL}${url}`, {
    headers: { cookie },
  });

  if (data.status === 401 && !ctx.req) {
    Router.replace('/login');
    return {};
  }

  if (data.status === 401 && ctx.req) {
    ctx.res.writeHead(302, {
      Location: `${SITE_URL}/login`,
    });
    ctx.res.end();
    return;
  }

  return data;
}

export default getAuthToken;

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};
