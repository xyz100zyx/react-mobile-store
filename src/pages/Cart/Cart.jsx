import React from 'react';
import styles from './Cart.module.scss';
import cartSvg from '../../assets/Cart/iconfinder_shopping-cart_2561279 1.svg'
import phoneImg from '../../assets/PhonePage/PhoneItem/Note_11_Pro_Black_1.jpg'
import {useSelector} from "react-redux";

const Cart = () => {

    const activePhone = useSelector(state => state.phones.active);
    console.log(activePhone)

    return (
        <div className={styles.cart}>
            <div className={styles.cart__container}>
                <div className={styles.cart__top}>
                    <div className={styles.cart__top_left}>
                        <img className={styles.cart__icon} src={cartSvg} alt="icon cart"/>
                        <span className={styles.cart__title}>Корзина</span>
                    </div>
                    <button className={styles.cart__clean}>Очистить карзину</button>
                </div>
                <ul className={`${styles.cart__list} ${styles.list}`}>
                    <li className={`${styles.list__item} ${styles.item}`}>
                        <img className={styles.item__img} src={phoneImg} alt="photo phone's"/>
                        <h5 className={styles.item__name}>POCO X4 Pro G 8/256 ГБ (чёрный)</h5>
                        <button className={styles.item__minus}>-</button>
                        <span className={styles.item__count}>2</span>
                        <button className={styles.item__plus}>+</button>
                        <span className={styles.item__price}>1199 BYN</span>
                        <button className={styles.item__clean}>x</button>
                    </li>
                    <li className={`${styles.list__item} ${styles.item}`}>
                        <img className={styles.item__img} src={phoneImg} alt="photo phone's"/>
                        <h5 className={styles.item__name}>POCO X4 Pro G 8/256 ГБ (чёрный)</h5>
                        <button className={styles.item__minus}>-</button>
                        <span className={styles.item__count}>2</span>
                        <button className={styles.item__plus}>+</button>
                        <span className={styles.item__price}>1199 BYN</span>
                        <button className={styles.item__clean}>x</button>
                    </li>
                </ul>
                <div className={`${styles.cart__bottom} ${styles.bottom}`}>
                    <span className={`${styles.bottom__total} ${styles.total}`}>Всего товаров: <span
                        className={styles.total__count}>3 шт.</span>
                    </span>
                    <span className={`${styles.bottom__total} ${styles.total}`}>Сумма заказа: <span
                        className={styles.total__price}>1199 BYN</span>
                    </span>
                </div>
                <button className={styles.cart__submit}>Оплатить сейчас</button>
            </div>
        </div>
    )
}

export default Cart;
