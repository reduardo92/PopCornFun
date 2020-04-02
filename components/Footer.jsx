import styled from 'styled-components';
import { default as NextLink } from 'next/link';
import Link from '../components/Link';

const Styled = styled.footer`
  margin-top: auto;
  position: relative;
  text-align: center;
  background: url('/ticketBg.jpg') center;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(
      to top,
      #1c0c07,
      #1e0d07,
      #200e08,
      #210e08,
      #230f08
    );
    z-index: -1;
    opacity: 0.97;
  }

  p {
    color: var(--white-clr);
  }

  .content {
    padding: 2em 0;
    display: grid;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
  }

  .logo {
    display: block;
    margin-bottom: 2em;
    font-weight: bold;
    transition: var(--ease--in--out--02s);

    &:hover,
    &:focus {
      opacity: 0.9;
      color: var(--primary-clr);
    }
    img {
      width: 80px;
      margin: 0 auto;
    }
  }

  .join--btn {
    background-color: var(--white-clr);
    color: var(--primary-clr-rgba);
    font-size: 1.3em;
    font-weight: bold;
    display: block;
    word-wrap: break-word;
    white-space: normal;
    text-transform: uppercase;
    border-radius: 5px;
    border: 2px solid transparent;
    padding: 8px 16px;
    transition: var(--ease--in--out--02s);

    &:hover,
    &:focus {
      opacity: 0.9;
      border-color: var(--primary-clr);
    }
  }

  .footer--nav {
    display: flex;
    justify-content: space-between;
    margin-top: 2em;

    &__link {
      color: var(--white-clr);
      font-weight: bold;
      border-bottom: 2px solid transparent;
      transition: var(--ease--in--out--02s);

      &:hover {
        color: var(--white-clr);
        border-bottom-color: var(--primary-clr);
      }
    }

    .selected {
      border-bottom-color: var(--primary-clr) !important;
      color: var(--white-clr) !important;
    }
  }

  .copyRight {
    padding: 1em 0;
    align-self: end;
  }

  @media screen and (min-width: 1000px) {
    .content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }

    .logo {
      margin-bottom: 0;
    }

    .join--btn {
      order: -1;
      justify-self: center;
    }
  }
`;

const Footer = () => (
  <Styled>
    <div className='content'>
      <NextLink href='/'>
        <a className='logo'>
          <img src='/popcorn_logo.png' alt='popcorn logo' />
          PopCorn Fun
        </a>
      </NextLink>
      <NextLink href='/login'>
        <a className='join--btn'>Join The Community</a>
      </NextLink>
      <nav className='footer--nav'>
        <Link href='/discover?query=movie&page=1'>
          <a className='footer--nav__link'>Discover</a>
        </Link>
        <Link href='/movie'>
          <a className='footer--nav__link'>Movies</a>
        </Link>
        <Link href='/tv'>
          <a className='footer--nav__link'>Tv</a>
        </Link>
        <Link href='/person'>
          <a className='footer--nav__link'>Person</a>
        </Link>
      </nav>
    </div>
    <div className='copyRight'>
      <small>© PopCorn Fun 2020</small>
    </div>
  </Styled>
);

export default Footer;
