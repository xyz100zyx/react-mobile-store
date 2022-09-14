import React from 'react';
import styles from './Cart.module.scss';
import {setActiveManufacturer} from "../../redux/slices/filterSlice";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";

const EmptyCart = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const onClickGoChose = () => {
        dispatch(setActiveManufacturer(0))
        navigate('/')
    }

    return (
        <div className={styles.cart_empty}>
            <span className={styles.cart_empty__text}>Ваша корзина пуста, присмотресь к списку смартфонов</span>
            <button onClick={() => onClickGoChose()} className={styles.cart_empty__btn}>Выбрать</button>
        </div>
    )
}

export default EmptyCart;