import React from 'react';
import styled from 'styled-components';
import useForm from '../Hooks/useForm';
import Form from 'react-bootstrap/Form';
import { FaSearch } from 'react-icons/fa';

const Styled = styled.div`
  background-color: var(--white-clr);
  padding: 0 1em;

  .form {
    max-width: 920px;
    margin: 0 auto;
  }

  .form-group {
    display: flex;
    margin: 0;
  }
  .form-label {
    margin-right: 0.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      color: var(--grey-clr);
    }
  }

  .form-control {
    border: 0;
  }
`;

const SearchFrom = () => {
  const submit = () => {
    if (form.search === '') {
      console.log('enter something');
      //   setAlert('Please search something...', 'danger');
    } else {
      console.log('loged', form.search);
      setForm({ search: '' });
    }
  };

  const { handleChange, handleSubmit, form, setForm } = useForm(
    { search: '' },
    submit
  );

  return (
    <Styled classname='search form'>
      <Form className='form' onSubmit={handleSubmit}>
        <Form.Group controlId='search'>
          <Form.Label>
            <FaSearch />
          </Form.Label>
          <Form.Control
            type='text'
            name='search'
            value={form.search}
            onChange={handleChange}
            placeholder='Search for a movie, tv show, person...'
          />
        </Form.Group>
      </Form>
    </Styled>
  );
};

export default SearchFrom;
