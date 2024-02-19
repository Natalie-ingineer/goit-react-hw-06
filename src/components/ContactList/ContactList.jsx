import css from "./ContactList.module.css";
import { Contact } from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { deleteContacts } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts.item);
  console.log(contacts);

  return (
    <ul className={css.listContacts}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          userId={contact.id}
          contact={contact.name}
          phonenumber={contact.number}
          onDelete={(contacts, actions) => {
            dispatch(deleteContacts(contacts));
          }}
        ></Contact>
      ))}
    </ul>
  );
};
