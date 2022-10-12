import style from '../Form/Form.module.css'
import { useSelector,useDispatch } from 'react-redux'
import { addContact } from 'redux/counterSlice';
import { nanoid } from 'nanoid'

export default function  Form(){
const dispatch = useDispatch()
const contacts = useSelector(state=>state.counter.contacts)

const submitForm = (e) =>{
e.preventDefault()
const form = e.currentTarget.elements
if(contacts.find((contact)=>contact.name===form.name.value)){
      alert(`${form.name.value} is alredy in you contacts`)
      return
    }
dispatch(addContact({
  name:form.name.value,
  number:form.number.value,
  id:nanoid()
}))
e.target.reset()
}

return(<><h2>Phonebook</h2>
<form onSubmit={submitForm} className={style.form}>
  <label className={style.label}>
    Name
  <input
  className={style.input}
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
  </label>
  <label className={style.label}>
    Number
    <input
    className={style.input}
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
  </label>
  <button type='submit' className={style.button} >Add contact</button>
</form>
</> )
}
