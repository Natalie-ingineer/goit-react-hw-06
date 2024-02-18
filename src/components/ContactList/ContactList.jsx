import css from "./ContactList.module.css";
import { Contact } from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { deleteContacts } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  console.log(contacts);

  return (
    <ul className={css.listContacts}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          userId={contact.id}
          contact={contact.name}
          phonenumber={contact.number}
          onClick={(contacts, actions) => {
            dispatch(deleteContacts({ id: nanoid() !== actions }));
          }}
        ></Contact>
      ))}
    </ul>
  );
};
