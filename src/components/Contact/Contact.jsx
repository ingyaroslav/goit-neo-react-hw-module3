import css from './Contact.module.css'
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";

const Contact = ({ key, id, name, number, handleDelete }) => 
    <li key={key} className={css.contact}>
        <div className={css.wrapper}>
            <p className={css.label}><IoIosContact />{name}</p>
            <p className={css.label}><FaPhoneAlt />{number}</p>
        </div>
        <button type="button" className={css.button} onClick={() => handleDelete(id)}>Delete</button>
    </li>
    
export default Contact;