import Contact from '../Contact/Contact'
import css from './ContactList.module.css'

const ContactList = ({ contacts, handleDelete }) => (
  <ul className={css.list}>
    {contacts.map(({ id, name, number }) => (
      <Contact
        key={id}
        id={id}
        name={name}
        number={number}
        handleDelete={handleDelete}
      />
    ))}
  </ul>
);

export default ContactList;