import styled from 'styled-components';
import { IMG_URL_OR } from '../../context/types';

const MediaMainStyle = styled.section`
  background: var(--bg-dark-gradient);
  margin-top: 90px;

  ul {
    list-style: none;
  }

  .profile--backdrop {
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      url(${({ bgImg }) => `${IMG_URL_OR}${bgImg}`}) no-repeat center;
    background-color: black;
    min-height: 400px;
    background-size: cover;
    background-position: top;
    object-fit: cover;
    position: relative;
  }

  .profile--main {
    position: relative;
    padding: 2em 0em 0;
    max-width: 750px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    .profile--main {
      max-width: 1100px;
      padding: 1em 0 0;
    }
  }

  @media screen and (min-width: 1100px) {
    margin-top: 60px;

    .profile--backdrop {
      display: none;
    }

    .profile--main {
      max-width: 100%;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      z-index: 1;

      .profile--content {
        flex: 100%;
        width: 100%;
      }

      .main-con {
        max-width: 60%;
        margin-left: auto;
        margin-right: 5%;
        padding: 3em 0;
        position: relative;
      }

      .profile--stats {
        flex: 0 1 30%;
      }
    }
  }
`;

export default MediaMainStyle;
