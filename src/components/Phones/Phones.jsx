import React from "react";
import axios from "axios";
import styles from './Phones.module.scss';
import MyLoader from "../Skeleton/Skeleton";
import Phone from "../Phone/Phone";
import {useDispatch, useSelector} from "react-redux";
import {setPhones} from "../../redux/slices/phonesSlice";

const Phones = () => {

    const [isLoaded, setIsLoaded] = React.useState(false)
    const dispatch = useDispatch();
    const phones = useSelector(state => state.phones.phones);
    const activeManufacturer = useSelector(state => state.filter.activeManufacturer);

    React.useEffect(() =>{
        async function fetchPhones(){
            try{
                const data = await axios.get("https://react-mobile.free.mockoapp.net/phones/").then(res => res.data)
                dispatch(setPhones(data))
                setIsLoaded(true)
            }catch(err){
                console.log(err, `Не удалось получить данные из сервера :С`)
            }
        }
        fetchPhones();
    },[])

    const pocoPhones = phones.filter((phone) => phone.manufacturer === 'Poco');
    const iPhones = phones.filter((phone) => phone.manufacturer === 'Apple iPhone');
    const samsungPhones = phones.filter((phone) => phone.manufacturer === 'Samsung');
    const xiaomiPhones = phones.filter((phone) => phone.manufacturer === 'Xiaomi')

    {
        if (activeManufacturer === 0){
            return (
                <div className={styles.phones}>
                    <div className={styles.phones__container}>
                        <ul className={styles.phones__list}>
                            {!isLoaded ? (
                                <>
                                    <div className={styles.skeleton}>
                                        <MyLoader />
                                    </div>
                                    <div className={styles.skeleton}>
                                        <MyLoader />
                                    </div>
                                    <div className={styles.skeleton}>
                                        <MyLoader />
                                    </div>
                                    <div className={styles.skeleton}>
                                        <MyLoader />
                                    </div>
                                    <div className={styles.skeleton}>
                                        <MyLoader />
                                    </div>
                                    <div className={styles.skeleton}>
                                        <MyLoader />
                                    </div>
                                </>
                            ) :  phones.map(phone => {
                                    return (
                                        <li key={phone.id} className={styles.phones__item}>
                                            <Phone key={phone.id} item={phone}/>
                                        </li>
                                    )
                                })}
                        </ul>
                    </div>
                </div>
            )
        }
        else if (activeManufacturer === 1){
            return (
                <div className={styles.phones}>
                    <div className={styles.phones__container}>
                        <ul className={styles.phones__list}>
                            {pocoPhones.map(phone => {
                                return (
                                    <li key={phone.id} className={styles.phones__item}>
                                        <Phone key={phone.id} item={phone}/>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )
        }
        else if(activeManufacturer === 2){
            return (
                <div className={styles.phones}>
                    <div className={styles.phones__container}>
                        <ul className={styles.phones__list}>
                            {iPhones.map(phone => {
                                return (
                                    <li key={phone.id} className={styles.phones__item}>
                                        <Phone key={phone.id} item={phone}/>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )
        }
        else if (activeManufacturer === 3){
            return (
                <div className={styles.phones}>
                    <div className={styles.phones__container}>
                        <ul className={styles.phones__list}>
                            {samsungPhones.map(phone => {
                                return (
                                    <li key={phone.id} className={styles.phones__item}>
                                        <Phone key={phone.id} item={phone}/>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div className={styles.phones}>
                    <div className={styles.phones__container}>
                        <ul className={styles.phones__list}>
                            {xiaomiPhones.map(phone => {
                                return (
                                    <li key={phone.id} className={styles.phones__item}>
                                        <Phone key={phone.id} item={phone}/>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )
        }
    }
}

export default Phones;