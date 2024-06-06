import Contact from "../Contact/Contact";
import css from './ContactList.module.css'

const ContactList = ({ contacts, onDelete }) => {
    return (
    <ul className={css.contactListWrapper}>
         {contacts.map((contact) => {
            return (
                <li className={css.listItem} key={contact.id} >
                    <Contact
                    id={contact.id}
                    name={contact.name}
                    number={contact.number}
                    onDelete={onDelete}   
                    />
                </li>
                )
            })
        }
    </ul>
    )
}

export default ContactList