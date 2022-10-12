import style from '../Filter/Filter.module.css'
import { filterContacts } from 'redux/counterSlice';
import { useDispatch } from 'react-redux'
export default function Filter(){

    const dispatch = useDispatch()

    const handleChangeFilter = (e) =>{
        dispatch(filterContacts(e.target.value))
        }

        return(
        <form  className={style.form} onSubmit={(e)=>{e.preventDefault()}}>
        <h2>Contacts</h2>
        <label className={style.label}>
            Find contact by name
            <input type="text" onChange={handleChangeFilter} className={style.input} name="filter"/>
        </label>
    </form>
    )   
}