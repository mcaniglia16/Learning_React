import React, { useReducer } from "react";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CONTACT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload], //STATE IS IMMUTABLE so we need to create a new contacts array and spread all of the contacts into it, and then add our new contact
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((c) => c.id !== action.payload),
      };
    case SET_CONTACT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    default:
      return state;
  }
};
