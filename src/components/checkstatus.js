import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/category/category';

function Category() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.Category.message);
  const status = () => {
    dispatch(checkStatus());
  };
  return (
    <div className="status">
      <span>{message}</span>
      <button type="submit" onClick={status}>
        Check Status
      </button>
    </div>
  );
}
export { Category as default };
