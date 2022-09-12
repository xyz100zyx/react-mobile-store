import React from 'react';
import styles from './Cart.module.scss';
import cartSvg from '../../assets/Cart/iconfinder_shopping-cart_2561279 1.svg'
import {useDispatch, useSelector} from "react-redux";
import {clearChosenPhones} from "../../redux/slices/cartSlice";

const Cart = () => {

    const activePhone = useSelector(state => state.phones.active);
    const cartPhones = useSelector(state => state.cart.chosenPhones);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const dispatch = useDispatch();

    const clearCartPhones = () => {
        dispatch(clearChosenPhones());
    }

    return (
        <div className={styles.cart}>
            <div className={styles.cart__container}>
                <div className={styles.cart__top}>
                    <div className={styles.cart__top_left}>
                        <img className={styles.cart__icon} src={cartSvg} alt="icon cart"/>
                        <span className={styles.cart__title}>Корзина</span>
                    </div>
                    <button onClick={() => clearCartPhones()} className={styles.cart__clean}>Очистить карзину</button>
                </div>
                {cartPhones.length > 0 &&
                    <>
                        <ul className={`${styles.cart__list} ${styles.list}`}>
                            {cartPhones.map(phone => {
                                return (
                                    <li className={`${styles.list__item} ${styles.item}`}>
                                        <img className={styles.item__img} src={phone.images[0]} alt="photo phone's"/>
                                        <h5 className={styles.item__name}>{phone.manufacturer} {phone.model} {phone.RAM}/{phone.SSD} ГБ
                                            ({phone.color})</h5>
                                        <button className={styles.item__minus}>-</button>
                                        <span className={styles.item__count}>2</span>
                                        <button className={styles.item__plus}>+</button>
                                        <span className={styles.item__price}>{phone.price} BYN</span>
                                        <button className={styles.item__clean}>x</button>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className={`${styles.cart__bottom} ${styles.bottom}`}>
                    <span className={`${styles.bottom__total} ${styles.total}`}>Всего товаров: <span
                        className={styles.total__count}>{cartPhones.length} шт.</span>
                    </span>
                            <span className={`${styles.bottom__total} ${styles.total}`}>Сумма заказа: <span
                                className={styles.total__price}>{totalPrice} BYN</span>
                    </span>
                        </div>
                        <button className={styles.cart__submit}>Оплатить сейчас</button>
                    </>}
                {
                    cartPhones.length === 0 &&
                    <>
                        <span>Ваша корзина пуста, присмотресь к списку смартфонов</span>
                        <button>Выбрать</button>
                    </>
                }
            </div>
        </div>
    )
}

export default Cart;
