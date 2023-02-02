import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { checkStatus } from '../redux/category/category';

function Category() {
  const categoryData = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const handleData = () => {
    dispatch(checkStatus());
  };
  return (
    <>
      <button type="submit" onClick={handleData}>
        Check Status
      </button>
      <h1>{categoryData.category[0]}</h1>
    </>
  );
}
export { Category as default };
