import { FaUserLarge } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";



const Contact = ({ name, number }) => {
  return (
<div>
    <div>
          <p><FaUserLarge /> {name}</p>  
          <p><FaPhone /> {number}</p>
    </div>
          
     <button type="button">Delete</button>     
</div>  
  )

}

export default Contact


