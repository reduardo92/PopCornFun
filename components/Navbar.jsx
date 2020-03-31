import { useContext } from 'react';
import MovieContext from './context/MovieContext';
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from './Link';
import NextLink from 'next/link';
import SearchFrom from './ui/Forms/SearchFrom';
import { IoIosArrowDown } from 'react-icons/io';

const Styled = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  background-image: var(--bg-dark-gradient);
  .navbar {
    max-width: 1500px;
    margin: 0 auto;
  }

  .navbar-toggler {
    background-color: var(--white-clr);
  }

  .navbar-nav .nav-link {
    color: var(--white-clr);
    font-weight: bold;
    border-bottom: 2px solid transparent;
    transition: var(--ease--in--out--02s);

    &:hover {
      color: var(--white-clr);
      border-bottom-color: var(--primary-clr);
    }
  }
  /* Change Nav Links Active */
  .selected {
    border-bottom-color: var(--primary-clr) !important;
    color: var(--white-clr) !important;
  }

  .navbar-brand {
    width: 30px;
    font-size: 1rem;
    display: flex;
    align-items: center;
    color: var(--white-clr);
    font-weight: bold;
    cursor: pointer;

    &:hover,
    &:focus {
      color: inherit;
    }
    img {
      display: inline-block;
      margin-right: 0.5em;
    }
  }

  .nav--dropdown:hover .dropdown-menu {
    display: block;
  }

  .dropdown--link {
    display: none;
  }

  .dropdown-menu .selected {
    color: black !important;

    &:hover,
    &:active {
      color: var(--white-clr) !important;
      background: var(--bg-gradient);
    }
  }

  .dropdown-item {
    &:hover,
    &:active {
      color: var(--white-clr);
      background: var(--bg-gradient);
    }
  }

  .dropdown--btn {
    display: block;
    width: 100%;
    text-align: left;
    outline-color: transparent;
  }

  @media screen and (min-width: 1000px) {
    .dropdown--btn {
      display: none;
    }

    .dropdown--link {
      display: block;
    }
  }

  @media screen and (min-width: 1000px) {
    .navbar-collapse {
      margin-left: 13em;
    }

    .navbar-brand {
      width: 40px;
    }
  }
`;

const NavCustom = () => {
  const { navScroll, navRef } = useContext(MovieContext);

  return (
    <Styled className='header' ref={navRef} navScroll={navScroll}>
      <Navbar collapseOnSelect expand='lg'>
        <NextLink href='/'>
          <a className='navbar-brand'>
            <img src='/popcorn_logo.png' alt='popcorn logo' />
            PopCorn Fun
          </a>
        </NextLink>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Link href='/'>
              <a className='nav-link' role='button'>
                Home
              </a>
            </Link>
            <div className='dropdown nav-item nav--dropdown'>
              <Link href='/discover?query=movie&page=1'>
                <a className='nav-link dropdown--link' role='button'>
                  Discover <IoIosArrowDown className='nav--arrow' />
                </a>
              </Link>
              <button className='nav-link dropdown--btn' role='button'>
                Discover <IoIosArrowDown className='nav--arrow' />
              </button>
              <div className='dropdown-menu'>
                <Link href='/discover?query=movie&page=1'>
                  <a className='dropdown-item' role='button'>
                    Movies
                  </a>
                </Link>
                <Link href='/discover?query=tv&page=1'>
                  <a className='dropdown-item' role='button'>
                    Tv Shows
                  </a>
                </Link>
              </div>
            </div>
            {/*  */}
            <div className='dropdown nav-item nav--dropdown'>
              <Link href='/movie'>
                <a className='nav-link dropdown--link' role='button'>
                  Movies <IoIosArrowDown className='nav--arrow' />
                </a>
              </Link>
              <button className='nav-link dropdown--btn' role='button'>
                Movies <IoIosArrowDown className='nav--arrow' />
              </button>
              <div className='dropdown-menu'>
                <Link href='/movie'>
                  <a className='dropdown-item' role='button'>
                    Popular
                  </a>
                </Link>
                <Link href='/movie?query=top_rated'>
                  <a className='dropdown-item' role='button'>
                    Top Rated
                  </a>
                </Link>
                <Link href='/movie?query=upcoming'>
                  <a className='dropdown-item' role='button'>
                    Upcoming
                  </a>
                </Link>
                <Link href='/movie?query=now_playing'>
                  <a className='dropdown-item' role='button'>
                    Now Playing
                  </a>
                </Link>
              </div>
            </div>
            {/*  */}
            <div className='dropdown nav-item nav--dropdown'>
              <Link href='/tv'>
                <a className='nav-link dropdown--link' role='button'>
                  Tv <IoIosArrowDown className='nav--arrow' />
                </a>
              </Link>
              <button className='nav-link dropdown--btn' role='button'>
                Tv <IoIosArrowDown className='nav--arrow' />
              </button>
              <div className='dropdown-menu'>
                <Link href='/tv'>
                  <a className='dropdown-item' role='button'>
                    Popular
                  </a>
                </Link>
                <Link href='/tv?query=top_rated'>
                  <a className='dropdown-item' role='button'>
                    Top Rated
                  </a>
                </Link>
                <Link href='/tv?query=on_the_air'>
                  <a className='dropdown-item' role='button'>
                    On Tv
                  </a>
                </Link>
                <Link href='/tv?query=airing_today'>
                  <a className='dropdown-item' role='button'>
                    Airing Today
                  </a>
                </Link>
              </div>
            </div>
            {/*  */}
            <Link href='/person'>
              <a className='nav-link' role='button'>
                People
              </a>
            </Link>
          </Nav>
          <Nav>
            <Link href='/login'>
              <a className='nav-link' role='button'>
                Log In
              </a>
            </Link>
            <Link href='/signup'>
              <a className='nav-link' role='button'>
                Sign Up
              </a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <SearchFrom />
    </Styled>
  );
};

export default NavCustom;
