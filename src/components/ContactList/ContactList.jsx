import css from "./ContactList.module.css";
import { Contact } from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { deleteContacts } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state);

  return (
    <ul className={css.listContacts}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          userId={id}
          contact={name}
          phonenumber={number}
          onDeleteUser={(contacts, actions) => {
            dispatch(deleteContacts({ id: nanoid(), ...contacts }));
          }}
        ></Contact>
      ))}
    </ul>
  );
};
