import { createContext, useContext, useReducer } from 'react';

// Action types
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const UPDATE_FORM_INPUT = 'UPDATE_FORM_INPUT';
export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';

// Initial state
export const initialState = {
  contacts: [
    { id: 1, name: 'Alice Smith', email: 'alice@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Bob Johnson', email: 'bob@example.com', phone: '234-567-8901' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', phone: '345-678-9012' },
    { id: 4, name: 'Diana Prince', email: 'diana@example.com', phone: '456-789-0123' }
  ],
  searchTerm: '',
  isModalOpen: false,
  editingContact: null,
  formInputs: {
    name: '',
    email: '',
    phone: ''
  }
};

// Reducer function
export const appReducer = (state, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload
      };

    case OPEN_MODAL:
      if (action.payload) {
        // Edit mode - pre-fill form with contact data
        return {
          ...state,
          isModalOpen: true,
          editingContact: action.payload,
          formInputs: {
            name: action.payload.name,
            email: action.payload.email,
            phone: action.payload.phone
          }
        };
      }
      // Add mode - clear form
      return {
        ...state,
        isModalOpen: true,
        editingContact: null,
        formInputs: {
          name: '',
          email: '',
          phone: ''
        }
      };

    case CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
        editingContact: null,
        formInputs: {
          name: '',
          email: '',
          phone: ''
        }
      };

    case UPDATE_FORM_INPUT:
      return {
        ...state,
        formInputs: {
          ...state.formInputs,
          [action.payload.field]: action.payload.value
        }
      };

    case ADD_CONTACT:
      const newContact = {
        id: Date.now(), // Simple ID generation
        name: state.formInputs.name,
        email: state.formInputs.email,
        phone: state.formInputs.phone
      };
      return {
        ...state,
        contacts: [...state.contacts, newContact],
        isModalOpen: false,
        formInputs: {
          name: '',
          email: '',
          phone: ''
        }
      };

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      };

    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === state.editingContact.id
            ? {
                ...contact,
                name: state.formInputs.name,
                email: state.formInputs.email,
                phone: state.formInputs.phone
              }
            : contact
        ),
        isModalOpen: false,
        editingContact: null,
        formInputs: {
          name: '',
          email: '',
          phone: ''
        }
      };

    default:
      return state;
  }
};

// Create Context
export const ContactContext = createContext();

// Context Provider Component
export const ContactProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <ContactContext.Provider value={{ state, dispatch }}>
      {children}
    </ContactContext.Provider>
  );
};

// Custom hook to use the context
export const useContacts = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContacts must be used within ContactProvider');
  }
  return context;
};
