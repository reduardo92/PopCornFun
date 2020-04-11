import React, { useContext, useEffect } from 'react';
import Layout from '../components/layout';
import useForm from '../components/Hooks/useForm';
import Button from 'react-bootstrap/Button';
import ButtonLink from '../components/ui/ButtonLink';
import FormSectionStyles from '../components/ui/Forms/FormSectionStyles';
import Link from 'next/link';
import AlertContext from '../components/context/alert/AlertContext';
import AuthContext from '../components/context/auth/AuthContext';
import Router from 'next/router';

const signup = () => {
  const { registerUser, isAuthentucated, error, msg, clearErros } = useContext(
    AuthContext
  );

  const { setAlert } = useContext(AlertContext);

  useEffect(() => {
    // if (isAuthentucated) {
    //   Router.push('/login');
    //   setAlert(msg, 'success');
    //   clearErros();
    // }

    if (error === 'User already exists') {
      setAlert(error, 'danger');
      clearErros();
    }

    // eslint-disable-next-line
  }, [error, isAuthentucated, Router.push]);

  const submit = () => {
    if (userName === '' || email === '' || password === '') {
      setAlert('Please Fill all fields', 'danger');
    } else if (password !== password2) {
      setAlert('Passwords dont macth', 'danger');
    } else if (!error) {
      registerUser({
        userName,
        email,
        password,
      });
      setForm({
        userName: '',
        email: '',
        password: '',
        password2: '',
      });
      Router.push('/login');
      setAlert(msg, 'success');
      clearErros();
    }
  };

  const { handleChange, handleSubmit, form, setForm } = useForm(
    {
      userName: '',
      email: '',
      password: '',
      password2: '',
    },
    submit
  );

  const { userName, email, password, password2 } = form;
  return (
    <Layout>
      <FormSectionStyles className='sign--up'>
        <div className='side--content'>
          <div className='side--content__inner'>
            <h2 className='title'>Join The Fun</h2>
            <ul className='benefits'>
              <li className='benefits__tab'>
                Log the movies and TV shows you have watched
              </li>
              <li className='benefits__tab'>Build a personal watchlist</li>
              <li className='benefits__tab'>Make your own favorite list</li>
              <li className='benefits__tab'>Rate movies & Tv Shows</li>
            </ul>
            <ButtonLink toLink='/login' title='Log In' styleDisplay />
          </div>
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
            <form className='form signIn--form' onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='userName'>Username</label>
                <input
                  id='userName'
                  name='userName'
                  value={userName}
                  onChange={handleChange}
                  type='text'
                  className='form-control'
                  aria-describedby='userName'
                  placeholder='Enter userName'
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
                  required
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
      </FormSectionStyles>
    </Layout>
  );
};

export default signup;
