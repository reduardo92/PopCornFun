import React from 'react';
import styled from 'styled-components';
import CardReview from './Cards/CardReview';
import Link from 'next/link';
import SimpleFlex from './SimpleFlex';
// import { FaArrowAltCircleRight } from 'react-icons/fa';

const Styled = styled.section`
  padding: 2em 0.5em;
  display: grid;
  grid-gap: 0.2em;

  .simple--flex {
    & > div {
      &:first-child {
        margin-left: 0.1em;
      }
    }
  }

  .noReviews {
    padding: 1em 0;
  }
`;

const ReviewSection = ({ data, movieId }) => {
  return (
    <Styled className='review--section'>
      <h3 className='subTitle'>Reviews</h3>
      <SimpleFlex className='simple--flex'>
        {data.length > 0 ? (
          data.map(
            (item, i) => i < 3 && <CardReview key={item.id} data={item} />
          )
        ) : (
          <div className='noReviews'>No reviews available</div>
        )}
      </SimpleFlex>
      <Link href='/movie/[id]/reviews' as={`/movie/${movieId}/reviews`}>
        <a className='title redHover'>Read All Reviews</a>
      </Link>
    </Styled>
  );
};

export default ReviewSection;
