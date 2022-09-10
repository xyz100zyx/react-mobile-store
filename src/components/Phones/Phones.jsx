import React from "react";
import axios from "axios";
import styles from './Phones.module.scss';
import Phone from "../Phone/Phone";
import {useDispatch, useSelector} from "react-redux";
import {setActivePhone, setPhones} from "../../redux/slices/phonesSlice";
import {useNavigate} from "react-router";

const Phones = () => {

    const dispatch = useDispatch();
    const phones = useSelector(state => state.phones.phones);
    const navigate = useNavigate();

    React.useEffect(() =>{
        async function fetchPhones(){
            try{
                const data = await axios.get("https://react-mobile.free.mockoapp.net/phones/").then(res => res.data)
                dispatch(setPhones(data))
            }catch(err){
                console.log(err, `Не удалось получить данные из сервера :С`)
            }
        }
        fetchPhones();
    },[])

    const onPhoneClick = (item) => {
        dispatch(setActivePhone(item))
    }

    return (
        <div className={styles.phones}>
            <div className={styles.phones__container}>
                <ul className={styles.phones__list}>
                    {phones.map(phone => {
                        return (
                            <li key={phone.id} onClick={() => onPhoneClick(phone)} className={styles.phones__item}>
                                <Phone key={phone.id} item={phone}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Phones;