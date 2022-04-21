import {RETRIEVE_USERS, } from "./types";
import UsersDataService from "../../api/service";

// dispatch the api-response at the store
export const retrieveUsers = () => async (dispatch) => {
    try {
      const res = await UsersDataService.getAll();
      dispatch({
        type: RETRIEVE_USERS,
        payload: res.data,
      });
    } catch (err) {
    }
  };
  