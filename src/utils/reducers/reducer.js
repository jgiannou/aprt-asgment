import { RETRIEVE_USERS } from "../actions/types";

const initialState = [];

  function usersReducer(users = initialState, action) { 
    const { type, payload } = action;
    switch (type) {
      case RETRIEVE_USERS:
        return payload;
      default:
        return users;
    }
  };
  export default usersReducer;