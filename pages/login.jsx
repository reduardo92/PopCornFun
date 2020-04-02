import React from 'react';
import Layout from '../components/layout';
import useForm from '../components/Hooks/useForm';
import styled from 'styled-components';
import ButtonLink from '../components/ui/ButtonLink';
import FormSectionStyles from '../components/ui/Forms/FormSectionStyles';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

const login = () => {
  const submit = () => {
    console.log(form);
  };

  const { handleChange, handleSubmit, form, setForm } = useForm(
    {
      email: '',
      password: ''
    },
    submit
  );

  const { email, password } = form;
  return (
    <Layout>
      <FormSectionStyles className='log--in' log>
        <div className='side--content'>
          <div className='side--content__inner'>
            <h2 className='title'>Welcome Back To The Fun</h2>
            <ul className='benefits'>
              <li className='benefits__tab'>
                Log the movies and TV shows you have watched
              </li>
              <li className='benefits__tab'>Build a personal watchlist</li>
              <li className='benefits__tab'>Make your own favorite list</li>
              <li className='benefits__tab'>Rate movies & Tv Shows</li>
            </ul>
            <ButtonLink toLink='/signup' title='Sing Up' styleDisplay />
          </div>
          <video autoPlay muted loop className='video--bg'>
            <source src='/theater.mp4' type='video/mp4' />
          </video>
        </div>
        <div className='form--content'>
          <div className='inner'>
            <h2 className='header'>Login to your account</h2>
            <p className='para text-dark'>
              welcome back, log in to access all your accont information.
            </p>
            <form className='form signIn--form' onSubmit={handleSubmit}>
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
              <Button type='submit'>Log In</Button>
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

export default login;
