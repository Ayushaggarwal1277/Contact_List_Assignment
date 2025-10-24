import { useContacts } from '../context/ContactContext';
import { UPDATE_FORM_INPUT, ADD_CONTACT, UPDATE_CONTACT, CLOSE_MODAL } from '../context/ContactContext';

const ContactForm = () => {
  const { state, dispatch } = useContacts();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!state.formInputs.name.trim() || !state.formInputs.email.trim() || !state.formInputs.phone.trim()) {
      alert('Please fill in all fields');
      return;
    }

    if (state.editingContact) {
      dispatch({ type: UPDATE_CONTACT });
    } else {
      dispatch({ type: ADD_CONTACT });
    }
  };

  const handleInputChange = (field, value) => {
    dispatch({ type: UPDATE_FORM_INPUT, payload: { field, value } });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={state.formInputs.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          placeholder="Enter contact name"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={state.formInputs.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          placeholder="Enter email address"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          value={state.formInputs.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          placeholder="Enter phone number"
          required
        />
      </div>

      <div className="flex gap-3 pt-4">
        <button
          type="submit"
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200"
        >
          {state.editingContact ? 'Update Contact' : 'Add Contact'}
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: CLOSE_MODAL })}
          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg font-medium transition-colors duration-200"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
