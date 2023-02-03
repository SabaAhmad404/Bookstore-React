import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { checkStatus } from "../redux/category/category";

function Category() {
  const message = useSelector((state) => state.categories.message);
  const dispatch = useDispatch();
  const handleData = () => {
    dispatch(checkStatus());
  };
  return (
    <>
      <span>{message}</span>
      <button type="submit" onClick={handleData}>
        Check Status
      </button>
    </>
  );
}
export { Category as default };
