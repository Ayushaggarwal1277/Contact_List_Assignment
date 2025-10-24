import { ContactProvider } from './context/ContactContext';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ContactList from './components/ContactList';
import ContactModal from './components/ContactModal';

function App() {
  return (
    <ContactProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-10 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <Header />
            <SearchBar />
            <ContactList />
          </div>
        </div>
        <ContactModal />
      </div>
    </ContactProvider>
  );
}

export default App;
