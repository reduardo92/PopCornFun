import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout';
import UserProfileHead from '../../components/ui/userProfile/UserProfileHead';
// import UserProfileTabs from '../../components/ui/userProfile/userProfileTabs';
import { SITE_URL } from '../../components/context/types';
import axios from 'axios';
import Router from 'next/router';

const Styled = styled.section`
  margin-top: 6em;
`;

const userProfile = ({ watchlist, favorites, ratings }) => {
  console.log(watchlist, favorites, ratings);

  return (
    <Layout>
      <Styled className='userProfile'>
        <UserProfileHead />
        {/* <UserProfileTabs /> */}
        <div className='userProfile--mainContet'>Hello</div>
      </Styled>
    </Layout>
  );
};

export default userProfile;

userProfile.getInitialProps = async (ctx) => {
  const cookie = ctx.req?.headers.cookie;

  const data = await axios.all(
    [
      await axios.get(`${SITE_URL}/api/watchlist`),
      await axios.get(`${SITE_URL}/api/favorites`),
      await axios.get(`${SITE_URL}/api/ratings`),
    ],
    { headers: { cookie } }
  );

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

  return {
    watchlist: data[0].data,
    favorites: data[1].data,
    ratings: data[2].data,
  };
};
