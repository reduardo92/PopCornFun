import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
import DropDown from '../DropDown';
import { useRouter } from 'next/router';

const Styled = styled.section`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  .nav--tab {
    justify-content: space-evenly;
    align-items: center;
    max-width: 500px;
    margin: auto;
    color: var(--second-clr);

    & > .nav-link {
      font-weight: 600;
      font-size: 0.9rem;
      padding: 0;
    }
  }

  .activeTab {
    border-bottom-color: var(--primary-clr);
  }
`;

const UserProfileTabs = () => {
  const [active, setActive] = useState();

  const {
    query: { userProfile },
  } = useRouter();

  const dropItems = [
    {
      name: 'favorites',
      dropItems: [
        {
          name: 'movies',
          href: '/[userProfile]',
          as: `/${userProfile}?c=favorites&m=movie`,
        },
        {
          name: 'tv',
          href: '/[userProfile]',
          as: `/${userProfile}??c=favorites&m=tv`,
        },
      ],
    },
    {
      name: 'watchlist',
      dropItems: [
        {
          name: 'movies',
          href: '/[userProfile]',
          as: `/${userProfile}?c=watchlist&m=movie`,
        },
        {
          name: 'tv',
          href: '/[userProfile]',
          as: `/${userProfile}?c=watchlist&m=tv`,
        },
      ],
    },
    {
      name: 'ratings',
      dropItems: [
        {
          name: 'movies',
          href: '/[userProfile]',
          as: `/${userProfile}?c=ratings&m=movie`,
        },
        {
          name: 'tv',
          href: '/[userProfile]',
          as: `/${userProfile}?c=ratings&m=tv`,
        },
      ],
    },
  ];

  return (
    <Styled className='userProfile--tabs'>
      <div className='inner'>
        <Nav className='nav--tab'>
          {/* OverView */}
          <Link href='/[userProfile]' as={`/${userProfile}?c=overview`}>
            <a
              onClick={() => setActive('overview')}
              className={`nav-link ${active === 'overview' && 'activeTab'}`}
            >
              Overview
            </a>
          </Link>
          <DropDown
            items={dropItems}
            invert
            active={active}
            setActive={setActive}
          />
        </Nav>
      </div>
    </Styled>
  );
};

export default UserProfileTabs;

//   const dropItems = [
//     {
//       name: 'favorites',
//       href: '/[userProfile]/[userPage]',
//       as: `/${userProfile}/favorites`,
//       dropItems: [
//         {
//           name: 'movies',
//           href: '/[userProfile]/[userPage]',
//           as: `/${userProfile}/favorites`,
//         },
//         {
//           name: 'tv',
//           href: '/[userProfile]/[userPage]',
//           as: `/${userProfile}/favorites?media=tv`,
//         },
//       ],
//     },
//     {
//       name: 'watchlist',
//       href: '/[userProfile]/[userPage]',
//       as: `/${userProfile}/watchlist`,
//       dropItems: [
//         {
//           name: 'movies',
//           href: '/[userProfile]/[userPage]',
//           as: `/${userProfile}/watchlist`,
//         },
//         {
//           name: 'tv',
//           href: '/[userProfile]/[userPage]',
//           as: `/${userProfile}/watchlist?media=tv`,
//         },
//       ],
//     },
//     {
//       name: 'ratings',
//       href: '/[userProfile]/[userPage]',
//       as: `/${userProfile}/ratings`,
//       dropItems: [
//         {
//           name: 'movies',
//           href: '/[userProfile]/[userPage]',
//           as: `/${userProfile}/ratings`,
//         },
//         {
//           name: 'tv',
//           href: '/[userProfile]/[userPage]',
//           as: `/${userProfile}/ratings?media=tv`,
//         },
//       ],
//     },
//   ];
