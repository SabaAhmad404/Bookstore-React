import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import '../styles/app.css';

const Categories = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.categories.message);

  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="cat-p">
      <span>{message}</span>
      <br />
      <button
        type="button"
        className="under-construction"
        onClick={handleCheckStatus}
      >
        Check status
      </button>
    </div>
  );
};

export default Categories;
