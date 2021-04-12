import React, { useReducer } from "react";
// import uuid from "uuid";
import {v4 as uuid} from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CONTACT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        type: "personal",
        id: "1",
        name: "Ted Teddard",
        email: "ted@gmail.com",
        phone: "111-111-1111",
      },
      {
        type: "professional",
        id: "2",
        name: "Sarah Smith",
        email: "sarah@gmail.com",
        phone: "222-222-2222",
      },
      {
        type: "professional",
        id: "3",
        name: "Babush Vivekvivek",
        email: "itsbaba@gmail.com",
        phone: "333-333-3333",
      },
    ],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact
  const addContact = (contact) => {
      contact.id = uuid();
      dispatch({type: ADD_CONTACT, payload: contact});
  }

  // Delete contact
  const deleteContact = (id) => {
    dispatch({type: DELETE_CONTACT, payload: id});
  }

  // Set current contact
  const setCurrent = (contact) => {
    dispatch({type: SET_CONTACT, payload: contact});
  }

  // Clear current contact
  const clearCurrent = () => {
    dispatch({type: CLEAR_CURRENT});
  }

  // Update contact
  const updateContact = (contact) => {
    dispatch({type: UPDATE_CONTACT, payload: contact});
  }

  // Filter contacts
  const filterContacts = (text) => {
    dispatch({type: FILTER_CONTACT, payload: text});
  }

  // Clear filter
  const clearFilter = (text) => {
    dispatch({type: CLEAR_FILTER});
  }

  return (
      <ContactContext.Provider
      value={{
          contacts: state.contacts,
          filtered: state.filtered,
          current: state.current,
          addContact,
          deleteContact,
          setCurrent,
          clearCurrent,
          updateContact,
          filterContacts,
          clearFilter
      }}>
          {props.children}
      </ContactContext.Provider>
  )
};

export default ContactState;
