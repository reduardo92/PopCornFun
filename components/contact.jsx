import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import TitleBanner from './ui/titleBanner';
import TabStyled from './ui/tabs';

const Styled = styled.section`
  text-align: center;
  padding: 2em 1em 4em;

  .form {
    display: grid;
    grid-gap: 2em;
    align-items: center;
    justify-content: center;
    padding-top: 1.5em;
    max-width: 1100px;
    margin: 0 auto;
  }

  .input--link,
  .textarea {
    color: var(--second-clr);
    font-weight: var(--fw-bold);
    font-size: 0.9rem;
    text-align: center;
    border: 1px solid #777777;
    border-radius: 25px;
    outline: none;

    &::placeholder {
      text-align: center;
    }
  }

  .input--link,
  .textarea {
    padding: 1em;
    transition: var(--ease--in--out--02s);
    &:focus {
      outline-color: transparent;
      border-color: var(--primary-clr);
    }
  }

  /* Alert msg to subject */
  .alert--msg {
    outline-color: #af0000;
  }

  .alert--title {
    color: #af0000;
  }

  .form--button {
    background-color: var(--primary-clr);
    justify-self: center;
    &:hover,
    &focus {
      background-color: transparent;
      border-color: var(--primary-clr);
      outline-color: var(--primary-clr);
      color: var(--second-clr);
    }
  }

  .msg {
    justify-self: center;
    color: var(--primary-clr);
    grid-column: 1 / 3;
    font-weight: bold;
    font-size: 1.5rem;
  }

  @media screen and (min-width: 760px) {
    .form {
      grid-template-columns: repeat(3, 1fr);
      row-gap: 2em;
      column-gap: 1em;
    }

    .textarea,
    .form--button {
      grid-column: 1 / 4;
    }
  }
`;

const Contact = () => {
  const [status, setSatus] = useState(null);
  const [msg, setMsg] = useState(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const { name, email, phone, subject, message } = form;

  const handleChange = ({ target }) =>
    setForm(form => ({ ...form, [target.name]: target.value }));

  const clearMsg = () => setInterval(() => setMsg(null), 8000);

  const handleSubmit = ev => {
    ev.preventDefault();

    setInterval(() => setStatus(), 8000);
  };

  return (
    <Fade>
      <Styled className='contact section'>
        <Fade bottom>
          <TitleBanner title='CONTACT US' subtitle='get in touch' />
        </Fade>
        {msg && <h3 className='alert--title'>{msg}</h3>}
        <form
          className='form'
          onSubmit={handleSubmit}
          action='https://formspree.io/mnqjlvaz'
          method='POST'
        >
          <input type='hidden' name='form-name' value='contact' />
          <input
            onChange={handleChange}
            value={name}
            name='name'
            type='text'
            className='input--link name'
            placeholder='FULL NAME'
            required
          />
          <input
            onChange={handleChange}
            value={email}
            name='email'
            type='email'
            className='input--link email--form'
            placeholder='EMAIL'
            required
          />
          <input
            onChange={handleChange}
            value={phone}
            name='phone'
            type='text'
            className='input--link phone'
            placeholder='PHONE NUMBER'
            required
          />
          <textarea
            onChange={handleChange}
            value={message}
            className='textarea'
            name='message'
            cols='30'
            rows='9'
            placeholder='MESSAGE / QUESTION'
            required
          ></textarea>
          {status === 'SUCCESS' ? (
            <p className='msg'>Message Sent!</p>
          ) : (
            <TabStyled className='form--button' type='submit'>
              send message
            </TabStyled>
          )}
          {status === 'ERROR' && (
            <p className='msg'>Ooops! There was an error.</p>
          )}
        </form>
      </Styled>
    </Fade>
  );
};

export default Contact;
