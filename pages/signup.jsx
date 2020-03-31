import React from 'react';
import Layout from '../components/layout';
import FormStyle from '../components/ui/Forms/formstyle';
import useForm from '../components/Hooks/useForm';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import styled from 'styled-components';

const Styled = styled.section`
  margin: 8em 0 3em;
  color: var(--second-clr);

  .side--content,
  .form--content {
    overflow: hidden;
    padding: 0 1em;
    position: relative;
  }

  .video--bg {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    height: 100%;
    object-fit: cover;
    transform: translate(-50%, -50%);
    z-index: -1;
    background-color: black;
  }

  .header {
    font-size: 1.4rem;
    font-weight: bold;
  }

  .login--from {
    .btn {
      background: var(--primary-clr);
      border-color: var(--primary-clr);

      &:hover,
      &:focus {
        transform: scale(0.9);
        opacity: 0.8;
        background: var(--primary-clr);
        border-color: var(--primary-clr);
      }
    }
  }

  .cancel {
    color: var(--primary-clr);
    margin-left: 1em;
    border-bottom: 1px solid transparent;
    transition: var(--ease-12s);

    &:hover,
    &:focus {
      opacity: 0.8;
      border-bottom-color: var(--primary-clr);
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    grid-template-columns: repeat(2, 1fr);
    margin: 6.5em 0 0;
    /* height: 90%; */

    .side--content,
    .form--content {
      flex: 1;
      padding: 6em 1em;
      display: flex;
    }

    .side--content {
      /* background: linear-gradient(
          rgba(0, 0, 0, 0.74),
          rgba(97, 44, 7, 0.52),
          rgba(117, 44, 20, 0.83)
        ),
        url(/popcornBg.jpg) no-repeat center; */
      /* background-color: black;
      background-size: cover;
      background-position: top;
      object-fit: cover;
      position: relative; */
      color: var(--white-clr);
    }

    .video--bg {
      display: block;
    }

    .inner {
      flex: 1;
      max-width: 600px;
    }

    .login--from {
      .form-group {
        margin-bottom: 1.5rem;
      }
    }
  }

  @media screen and (min-width: 1050px) {
    .side--content,
    .form--content {
      align-items: center;
    }

    .inner {
      margin: 0 auto 0 calc(100% - 90%);
    }
  }
`;

const LayoutStyled = styled(Layout)`
  flex: 1 0 80%;
  display: grid;
`;

const signup = () => {
  const submit = () => {
    console.log(form);
  };

  const { handleChange, handleSubmit, form, setForm } = useForm(
    {
      username: '',
      email: '',
      password: '',
      password2: ''
    },
    submit
  );

  const { username, email, password, password2 } = form;
  return (
    <LayoutStyled>
      <Styled className='sign--up'>
        <div className='side--content'>
          <h2 className='header'>Sign up for an account</h2>
          <p className='para text-dark'>
            Signing up for an account is free and easy. Fill out the form below
            to get started.
          </p>
          <video autoPlay muted loop className='video--bg'>
            <source src='/theater.mp4' type='video/mp4' />
          </video>
        </div>
        <div className='form--content'>
          <div className='inner'>
            <h2 className='header'>Sign up for an account</h2>
            <p className='para text-dark'>
              Signing up for an account is free and easy. Fill out the form
              below to get started.
            </p>
            <form className='form login--from' onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='username'>Username</label>
                <input
                  id='username'
                  name='username'
                  value={username}
                  onChange={handleChange}
                  type='text'
                  className='form-control'
                  aria-describedby='username'
                  placeholder='Enter username'
                  // required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email address</label>
                <input
                  id='email'
                  name='email'
                  value={email}
                  onChange={handleChange}
                  type='email'
                  className='form-control'
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                  // required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input
                  id='password'
                  name='password'
                  value={password}
                  onChange={handleChange}
                  type='password'
                  className='form-control'
                  placeholder='Enter password'
                  minLength='6'
                  // required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password2'>Confirm password</label>
                <input
                  id='password2'
                  name='password2'
                  value={password2}
                  onChange={handleChange}
                  type='password'
                  className='form-control'
                  placeholder='Enter password again'
                  minLength='6'
                />
              </div>
              <Button type='submit'>Sign Up</Button>
              <Link href='/'>
                <a className='cancel'>Cancel</a>
              </Link>
            </form>
          </div>
        </div>
      </Styled>
    </LayoutStyled>
  );
};

export default signup;
