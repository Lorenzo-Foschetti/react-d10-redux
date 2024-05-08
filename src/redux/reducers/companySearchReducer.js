import { GET_JOB } from "../actions";

const initialState = {
  content: [],
};

const companySearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOB:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default companySearchReducer;
