import Contact from '../Contact/Contact'
import css from './ContactList.module.css'

const ContactList = ({ contactList, handleDelete }) => 
    <ul className={css.list}>
        {contactList.map(contact => <Contact key={contact.id} id={contact.id} name={contact.name} number={contact.number} handleDelete={handleDelete} />)}
    </ul>

export default ContactList