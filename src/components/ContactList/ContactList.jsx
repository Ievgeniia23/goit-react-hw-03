import Contact from "../Contact/Contact";
import css from './ContactList.module.css'

const ContactList = ({ contacts }) => {
    return (
    <ul className={css.contactListWrapper}>
         {contacts.map((contact) => {
            return (
                <li key={contact.id} >
                    <Contact
                    name={contact.name}
                    phone={contact.number}
                                               
                    />
                </li>
                )
            })
        }
    </ul>
    )
}

export default ContactList