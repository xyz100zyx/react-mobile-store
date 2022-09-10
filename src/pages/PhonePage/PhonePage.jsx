import React from "react";
import PhoneItem from "../../components/PhoneItem/PhoneItem";
import styles from './PhonePage.module.scss';
import PhonePhotos from "../../components/PhonePhotos/PhonePhotos";
import Swiper from "../../components/Swiper/Swiper";
import {useDispatch, useSelector} from "react-redux";
import {setStart} from "../../redux/slices/swiperSlice";
import PhoneInfo from "../../components/PhoneInfo/PhoneInfo";

const PhonePage = () => {

    const isOpenSwiper = useSelector(state => state.swiper.isOpen)
    const phone = useSelector(state => state.phones.active)
    const dispatch = useDispatch()
    dispatch(setStart())

    return (
        <div className={styles.phonePage}>
            <div className={styles.phonePage__container}>
                <nav className={styles.phonePage__nav}>
                    <ul className={`${styles.phonePage__navlist} ${styles.navlist}`}>
                        <li className={styles.navlist__item}>
                            <a href="#">Интернет-магазин</a>
                        </li>
                        <li className={styles.navlist__item}>
                            <a href="#">Смартфоны Poco</a>
                        </li>
                        <li className={styles.navlist__item}>
                            <a href="#">Смартфон POCO X4 Pro 5G 8/256GB (лазерный черный)</a>
                        </li>
                    </ul>
                </nav>
                <PhoneItem item={phone} />
                <PhonePhotos item={phone} />
                {isOpenSwiper &&  <Swiper />}
                <PhoneInfo />
            </div>
        </div>
    )
}

export default PhonePage;
