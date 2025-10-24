import { useContacts } from '../context/ContactContext';
import { OPEN_MODAL } from '../context/ContactContext';

const Header = () => {
  const { dispatch } = useContacts();

  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-3xl font-bold text-gray-800">My Contacts</h1>
      <button
        onClick={() => dispatch({ type: OPEN_MODAL, payload: null })}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition-colors duration-200"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Add New Contact
      </button>
    </div>
  );
};

export default Header;
