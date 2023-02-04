import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBookAPI } from '../redux/fetch';

function Create() {
  const [state, setState] = useState({
    item_id: uuidv4(),
    title: '',
    author: '',
    category: '',
  });

  const onChangeHandler = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
      category: 'Category Action',
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBookAPI(state));
    setState({
      item_id: uuidv4(),
      title: '',
      author: '',
      category: 'Category thriller',
    });
  };

  return (
    <form className="FORM" onSubmit={handleSubmit}>
      <input
        type="text"
        id="title"
        name="title"
        required
        value={state.title}
        onChange={onChangeHandler}
      />
      <input
        type="text"
        id="author"
        name="author"
        required
        value={state.author}
        onChange={onChangeHandler}
      />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default Create;
