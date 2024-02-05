import styles from './Contact.module.css';
import { FaUser, FaPhone } from 'react-icons/fa';

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li className={styles.contact} key={contact.id}>
      <div className={styles.info}>
        <p className={styles.name}>
          <FaUser /> {contact.name}
        </p>
        <p className={styles.phone}>
          <FaPhone /> {contact.number}
        </p>
      </div>
      <button
        className={styles.delete}
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
