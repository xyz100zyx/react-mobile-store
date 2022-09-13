import React from "react";

import styles from "./Header.module.scss";
import logo from '../../assets/Header/react-academy.svg'
import cart from '../../assets/Header/cart-icon.svg'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {

    const totalPrice = useSelector(state => state.cart.totalPrice)
    const cartCount = useSelector(state => state.cart.totalCount)

    return (
        <div className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__left}>
                    <Link to="/">
                        <img className={styles.header__logo} src={logo} alt="Logo"/>
                    </Link>
                    <div className={styles.header__desc}>
                        <h2 className={styles.header__title}>react-mobile</h2>
                        <h5 className={styles.header__subtitle}>Интнернет-магазин смартфонов</h5>
                    </div>
                </div>
                <Link to={`/cart`}>
                    <div className={`${styles.header__bucket} ${styles.bucket}`}>
                        <span className={styles.bucket__price}>{totalPrice} BYN</span>
                        <img src={cart} alt="cart-icon" className={styles.bucket__img}/>
                        <span className={styles.bucket__count}>{cartCount}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;