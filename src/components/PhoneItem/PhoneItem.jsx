import React from "react";
import styles from "./PhoneItem.module.scss";
import phoneImg from "../../assets/PhonePage/PhoneItem/Note_11_Pro_Black_1.jpg";
import sizeIcon from "../../assets/PhonePage/PhoneItem/size-icon.jpg";
import cameraIcon from "../../assets/PhonePage/PhoneItem/camera-icon.jpg";
import sdIcon from "../../assets/PhonePage/PhoneItem/sd-icon.jpg";
import PhonePhotos from "../PhonePhotos/PhonePhotos";
import {useSelector} from "react-redux";

const PhoneItem = ({item}) => {

    const phone = useSelector(state => state.phones.active);

    return (
        <div className={styles.PhoneItem}>
            <div className={styles.PhoneItem__container}>
                <h2 className={styles.PhoneItem__title}>
                    {phone.manufacturer} {phone.model} ({phone.color})
                </h2>
                <div className={`${styles.PhoneItem__content} ${styles.content}`}>
                    <img
                        className={styles.content__img}
                        src={phone.images[0]}
                        alt="Phone photo"
                    />
                    <div className={styles.content__right}>
                        <ul className={`${styles.content__list} ${styles.list}`}>
                            <li className={`${styles.list__item} ${styles.item}}`}>
                                <img className={styles.item__img} src={sizeIcon} alt="icon size"/>
                                <span className={styles.item__value}>22.4 “</span>
                            </li>
                            <li className={`${styles.list__item} ${styles.item}}`}>
                                <img className={styles.item__img} src={cameraIcon} alt="icon size"/>
                                <span className={styles.item__value}>108 Мп</span>
                            </li>
                            <li className={`${styles.list__item} ${styles.item}}`}>
                                <img className={styles.item__img} src={sdIcon} alt="icon size"/>
                                <span className={styles.item__value}>{phone.SSD} ГБ</span>
                            </li>
                        </ul>
                        <div className={`${styles.PhoneItem__price} ${styles.price}`}>
                            <span className={styles.price__value}>{phone.price}.00 BYN</span>
                            <button className={styles.price__button}>Оформить заказ</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneItem;
