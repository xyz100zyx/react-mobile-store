import React from "react";
import styles from './PhoneInfo.module.scss';
import {useSelector} from "react-redux";

const PhoneInfo = () => {

    const [active, setActive] = React.useState(1);

    const onCharactClick = () => {
        setActive(1)
    }

    const onReviewsClick = () => {
        setActive(2)
    }

    const activePhone = useSelector(state => state.phones.active);

    return (
        <div className={styles.info}>
            <ul className={styles.info__list}>
                <li className={styles.info__item}>
                    <button onClick={()=>onCharactClick()} className={active === 1 ? `${styles.info__btn} ${styles.info__btn_active}` : `${styles.info__btn}`}>Харакетеристики</button>
                </li>
                <li className={styles.info__item}>
                    <button onClick={() => onReviewsClick()} className={active === 2 ? `${styles.info__btn} ${styles.info__btn_active}` : `${styles.info__btn}`}>Отзывы <span>0</span></button>
                </li>
            </ul>
            <div className={styles.info__container}>
                <p className={styles.info__title}>Общая информация</p>
                <ul className={`${styles.info__desc} ${styles.desc}`}>
                    <li className={styles.desc__item}>
                        <span className={styles.desc__name}>Год выпуска:</span>
                        <span className={styles.desc__value}>2022 г.</span>
                    </li>
                    <li className={styles.desc__item}>
                        <span className={styles.desc__name}>Объём встроенной памяти:</span>
                        <span className={styles.desc__value}>256 Гб.</span>
                    </li>
                    <li className={styles.desc__item}>
                        <span className={styles.desc__name}>Серия:</span>
                        <span className={styles.desc__value}>{activePhone.manufacturer}</span>
                    </li>
                    <li className={styles.desc__item}>
                        <span className={styles.desc__name}>Модель:</span>
                        <span className={styles.desc__value}>{activePhone.model}</span>
                    </li>
                    <li className={styles.desc__item}>
                        <span className={styles.desc__name}>Операционная система:</span>
                        <span className={styles.desc__value}>Android 11 (MIUI 13)</span>
                    </li>
                    <li className={styles.desc__item}>
                        <span className={styles.desc__name}>Гарантия:</span>
                        <span className={styles.desc__value}>12 месяцев</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PhoneInfo;