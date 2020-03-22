import React from 'react';
import Layout from '../../components/layout';
import styled from 'styled-components';
import movieDB from '../../components/utility/movieDB';
import CardTwo from '../../components/ui/Cards/CardTwo';

const Styled = styled.section`
  background: var(--bg-dark-gradient);
  padding: 150px 1em 0 1em;

  .wrapper {
    max-width: 1500px;
    margin: 0 auto;

    .title {
      font-size: 1.5rem;
      margin-bottom: 1em;
    }
  }

  .content--container {
    display: grid;
    grid-gap: 2em;
  }

  @media screen and (min-width: 768px) {
    .content--container {
      grid-row-gap: 3.5em;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

const tv = ({ tv }) => {
  return (
    <Layout>
      <Styled className='movie--section'>
        <div className='wrapper'>
          <h2 className='title'>{tv.title} TV Show</h2>
          <div className='content--container'>
            {tv.results.map(item => (
              <CardTwo key={item.id} data={item} typeFor={tv.typeFor} />
            ))}
          </div>
        </div>
      </Styled>
    </Layout>
  );
};

tv.getInitialProps = async ({ query }) => {
  const queryLeng = Object.keys(query).length;
  try {
    const tv = await movieDB(`tv/${queryLeng === 0 ? 'popular' : query.query}`);
    return {
      tv: {
        typeFor: 'tv',
        title: queryLeng === 0 ? 'popular' : query.query.split('_').join(' '),
        ...tv
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export default tv;
