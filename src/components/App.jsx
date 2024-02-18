import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { SearchBox } from "./SearchBox/SearchBox";

export const App = () => {
  return (
    <>
      <h1 className="caption">Phonebook</h1>
      <ContactForm onAdd={addUser} />
      <SearchBox value={nameFilter} onFilter={setNameFilter} />
      <ContactList items={visibleUsers} onDelete={deleteUser} />
    </>
  );
};
