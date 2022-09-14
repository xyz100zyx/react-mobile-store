import React from "react";
import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom";
import {setActiveManufacturer} from "../../redux/slices/filterSlice";
import styles from './Navigation.module.scss';

import sortIcon from '../../assets/Navigation/sort-icon.svg';

export const types = [
    {"0": "All"},
    {"1": "Poco"},
    {"2": "iPhone"},
    {"3": "Samsung"},
    {"4": "Xiaomi"}
]

const Navigation = () => {

    const activeManufacturer = useSelector(state => state.filter.activeManufacturer);
    const dispatch = useDispatch();

    const onClickManufacturer = (index) => {
        dispatch(setActiveManufacturer(index))
        console.log(types[index][`${index}`])
    }

    return (
        <div className={styles.navigation}>
            <div className={styles.navigation__container}>
                <nav className={`${styles.navigation__nav} ${styles.nav}`}>
                    <ul className={styles.nav__list}>
                        {types.map((obj, index) => {
                            return (
                                <li key={index} onClick={() => onClickManufacturer(index)} className={activeManufacturer === index ? `${styles.nav__item} ${styles.nav__item_active}` : `${styles.nav__item}`}>
                                    <Link to={`/${obj[`${index}`].toLowerCase()}`}>{obj[`${index}`]}</Link>
                                </li>
                            )
                        })}
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