import React from 'react';
import styles from './CartPopup.module.scss';

export const CartPopup = ({state, action}) => {

    return (
        <div onClick={() => action(false)} className={styles.popup}>
            <div onClick={(e)=>e.stopPropagation()} className={styles.popup__container}>
                <p className={styles.popup__title}>Заполните поля для оформления заказа</p>
                <form className={`${styles.popup__form} ${styles.form}`} action="POST">
                    <div className={styles.form__row}>
                        <label htmlFor="" className={styles.form__label}>Имя:</label>
                        <input placeholder={`Имя`} type="text" className={styles.form__input}/>
                    </div>
                    <div className={styles.form__row}>
                        <label htmlFor="" className={styles.form__label}>Фамилия:</label>
                        <input placeholder={`Фамилия`} type="text" className={styles.form__input}/>
                    </div>
                    <div className={styles.form__row}>
                        <label htmlFor="" className={styles.form__label}>Отчество:</label>
                        <input placeholder={`Отчество`} type="text" className={styles.form__input}/>
                    </div>
                    <div className={styles.form__row}>
                        <label htmlFor="" className={styles.form__label}>Адрес доставки:</label>
                        <input placeholder={`г. Минск, ...`} type="text" className={styles.form__input}/>
                    </div>
                    <div className={styles.form__row}>
                        <label htmlFor="" className={styles.form__label}>Электронная почта:</label>
                        <input placeholder={`...@gmail.com`} type="text" className={styles.form__input}/>
                    </div>
                    <div className={styles.form__row}>
                        <label htmlFor="" className={styles.form__label}>Номер телефона:</label>
                        <input placeholder={`+375YYXXXXXXX`} type="text" className={styles.form__input}/>
                    </div>
                    <div className={styles.form__bottom}>
                        <div className={styles.form__row}>
                            <label htmlFor="" className={styles.form__label}>Номер карты:</label>
                            <input placeholder={`1234123412341234`} type="text" className={styles.form__input}/>
                        </div>
                        <div className={styles.form__row}>
                            <label htmlFor="" className={styles.form__label}>Срок действия:</label>
                            <input placeholder={`0623 (ММГГ)`} type="text" className={styles.form__input}/>
                        </div>
                        <div className={styles.form__row}>
                            <label htmlFor="" className={styles.form__label}>CVV-код:</label>
                            <input placeholder={`111`} type="password" className={styles.form__input}/>
                        </div>
                    </div>
                    <button className={styles.form__btn} type={"submit"}>Подтвердить</button>
                </form>
            </div>
        </div>
    )
}

export default CartPopup;