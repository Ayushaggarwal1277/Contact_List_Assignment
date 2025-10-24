# Contact List Application

 **Live Demo:** [https://contact-list-gnr6c4555-ayush-aggarwals-projects-f44e6e88.vercel.app](https://contact-list-gnr6c4555-ayush-aggarwals-projects-f44e6e88.vercel.app)

A modern, fully responsive Contact List web application built with React, using Context API and useReducer for state management, styled with Tailwind CSS.

## Features

-  **View Contacts**: Display all contacts in a clean, card-based layout
-  **Search Contacts**: Real-time search filtering by name (case-insensitive)
-  **Add Contact**: Add new contacts via a modal form
-  **Edit Contact**: Edit existing contacts with pre-filled form data
-  **Delete Contact**: Remove contacts from the list
-  **Fully Responsive**: Works seamlessly on mobile and desktop devices
-  **Modern UI**: Clean, light-themed design with Tailwind CSS

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Context API + useReducer** - State management (no useState used)

## Project Structure

```
tria_assignment/
 src/
    components/
       Header.jsx
       SearchBar.jsx
       ContactList.jsx
       ContactItem.jsx
       ContactModal.jsx
       ContactForm.jsx
    context/
       ContactContext.jsx
    App.jsx
    main.jsx
    index.css
 index.html
 package.json
 vite.config.js
 tailwind.config.js
 postcss.config.js
```

## Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## State Management

The application uses a centralized state management approach with:

- **useContext**: For providing state globally
- **useReducer**: For managing all application state

### State Structure

```javascript
{
  contacts: [],           // Array of contact objects
  searchTerm: '',         // Search filter string
  isModalOpen: false,     // Modal visibility
  editingContact: null,   // Contact being edited (null for add mode)
  formInputs: {           // Form input values
    name: '',
    email: '',
    phone: ''
  }
}
```

### Actions

- SET_SEARCH_TERM - Update search filter
- OPEN_MODAL - Open modal (add or edit mode)
- CLOSE_MODAL - Close modal and reset form
- UPDATE_FORM_INPUT - Update form field values
- ADD_CONTACT - Add new contact
- DELETE_CONTACT - Remove contact
- UPDATE_CONTACT - Update existing contact

## Design Principles

- **No useState**: All state managed through useReducer
- **Single source of truth**: All state in ContactContext
- **Component separation**: Clear separation of concerns
- **Accessibility**: Semantic HTML and proper labels
- **Responsive design**: Mobile-first approach

## Deployment

This application is deployed on Vercel and automatically updates with each push to the main branch.

## License

MIT
