const CHECK_STATUS = 'redux/category/CHECK_STATUS';

const initialState = {
  category: [],
};

export const checkStatus = (status) => ({
  type: CHECK_STATUS,
  text: status,
});

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return {
        state,
        category: [state.category, 'under-construction'],
      };
    default:
      return state;
  }
}
