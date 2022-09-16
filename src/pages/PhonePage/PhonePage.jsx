import React from "react";
import PhoneItem from "../../components/PhoneItem/PhoneItem";
import styles from './PhonePage.module.scss';
import PhonePhotos from "../../components/PhonePhotos/PhonePhotos";
import Swiper from "../../components/Swiper/Swiper";
import {useDispatch, useSelector} from "react-redux";
import {setStart} from "../../redux/slices/swiperSlice";
import {setActiveManufacturer} from "../../redux/slices/filterSlice";
import PhoneInfo from "../../components/PhoneInfo/PhoneInfo";
import {useLocation, Link} from "react-router-dom";

const PhonePage = () => {
    const activeManufacturer = useSelector(state => state.filter.activeManufacturer)
    const currLocation = useLocation()
    const activePhone = useSelector(state => state.phones.active)
    const isOpenSwiper = useSelector(state => state.swiper.isOpen)
    const dispatch = useDispatch()

    React.useEffect(()=>{
        dispatch(setStart())
    }, [])


    return (
        <div className={styles.phonePage}>
            <div className={styles.phonePage__container}>
                <nav className={styles.phonePage__nav}>
                    <ul className={`${styles.phonePage__navlist} ${styles.navlist}`}>
                        <li onClick={() => {dispatch(setActiveManufacturer(0))}} className={styles.navlist__item}>
                            <Link to="/">Интернет-магазин</Link>
                        </li>
                        <li onClick={() => {dispatch(setActiveManufacturer(activeManufacturer))}} className={styles.navlist__item}>
                            <Link to={`/${activePhone.cartItem.manufacturer.toLowerCase()}`}>Смартфоны {activePhone.cartItem.manufacturer}</Link>
                        </li>
                        <li className={styles.navlist__item}>
                            <Link to={currLocation.pathname}>Смартфон {activePhone.cartItem.manufacturer} {activePhone.cartItem.model} {activePhone.cartItem.RAM}/{activePhone.cartItem.SSD} ГБ ({activePhone.cartItem.color})</Link>
                        </li>
                    </ul>
                </nav>
                <PhoneItem item={activePhone} />
                <PhonePhotos item={activePhone} />
                {isOpenSwiper &&  <Swiper />}
                <PhoneInfo />
            </div>
        </div>
    )
}

export default PhonePage;
