import style from '../Contacts/Contacts.module.css'
import { useSelector,useDispatch } from 'react-redux'
import { removeContact } from 'redux/counterSlice';


export default function Contact(){

const contacts = useSelector(state=>state.counter.contacts)
const dispatch = useDispatch()


const filter = useSelector(state=>state.counter.filter)
const filteredArray=filter?contacts.filter(contact=>contact.name.toLowerCase().includes(filter.toLowerCase())):contacts

        return(
    <ul className={style.list}>
        {filteredArray.map((contact)=>(
        <li key={contact.id} className={style.item}>
           <p className={style.text}>{contact.name} : {contact.number}</p> 
           <button type="button" onClick={()=>{dispatch(removeContact(contact.id))}}  className={style.button}>delete</button>
        </li>
        ))}    
    </ul>
   )     
}


