import React from "react";
import styles from './Navigation.module.scss';

import sortIcon from '../../assets/Navigation/sort-icon.svg'

const Navigation = () => {

    

    return (
        <div className={styles.navigation}>
            <div className={styles.navigation__container}>
                <nav className={`${styles.navigation__nav} ${styles.nav}`}>
                    <ul className={styles.nav__list}>
                        <li className={`${styles.nav__item} ${styles.nav__item_active}`}>
                            <a href="#">Все</a>
                        </li>
                        <li className={styles.nav__item}>
                            <a href="#">Poco</a>
                        </li>
                        <li className={styles.nav__item}>
                            <a href="#">iPhone</a>
                        </li>
                        <li className={styles.nav__item}>
                            <a href="#">Samsung</a>
                        </li>
                        <li className={styles.nav__item}>
                            <a href="#">Xiaomi</a>
                        </li>
                    </ul>
                </nav>
                <div className={`${styles.navigation__sort} ${styles.sort}`}>
                    <img className={styles.sort__icon} src={sortIcon} alt="sort-icon"/>
                    <span className={styles.sort__text}>Сортировка по:</span>
                    <span className={styles.sort__type}>популярности</span>
                    <ul className={styles.sort__list}>
                        <li className={`${styles.sort__item_active} ${styles.sort__item}`}>
                            <span>популярности</span>
                        </li>
                        <li className={styles.sort__item}>
                            <span>цене</span>
                        </li>
                        <li className={styles.sort__item}>
                            <span>алфавиту</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation;