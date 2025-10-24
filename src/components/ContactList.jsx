import { useContacts } from '../context/ContactContext';
import ContactItem from './ContactItem';

const ContactList = () => {
  const { state } = useContacts();

  // Filter contacts based on search term
  const filteredContacts = state.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.searchTerm.toLowerCase())
  );

  if (filteredContacts.length === 0) {
    return (
      <div className="text-center py-12">
        <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <p className="text-gray-500 text-lg">
          {state.searchTerm ? 'No contacts found matching your search.' : 'No contacts yet. Add your first contact!'}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {filteredContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;
