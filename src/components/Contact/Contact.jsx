import { FaUserLarge } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

import css from './Contact.module.css'



const Contact = ({ name, phone }) => {
  return (
<div className={css.contactWrapper} >
    <div>
          <p className={css.contactTextWrapper}><FaUserLarge /> {name}</p>  
          <p className={css.contactTextWrapper}><FaPhone /> {phone}</p>
    </div>
          
     <button type="button" className={css.listBtn}>Delete</button>     
</div>  
  )

}

export default Contact


