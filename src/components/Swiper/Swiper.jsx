import React from 'react';
import styles from './Swiper.module.scss';
import closeIcon from "../../assets/PhonePage/PhoneItem/close-icon.svg"
import phoneImg from '../../assets/PhonePage/PhoneItem/Note_11_Pro_Black_1.jpg';
import arrowIcon from "../../assets/PhonePage/PhoneItem/arrow.svg";
import {useDispatch, useSelector} from "react-redux";
import {closeSwiper, setActiveIndex} from "../../redux/slices/swiperSlice";

const Swiper = () => {

    const activeIndexPhoto = useSelector(state => state.swiper.activeIndex)
    const activePhone = useSelector(state => state.phones.active)
    const dispatch = useDispatch()

    const onClickClose = () => {
        dispatch(closeSwiper())
    }

    const onClickNext = () => {
        if (activeIndexPhoto+1 < activePhone.images.length){
            dispatch(setActiveIndex(activeIndexPhoto+1))
        }else{
            dispatch(setActiveIndex(0))
        }
    }

    const onClickPrevious = () => {
        if (activeIndexPhoto-1 > 0){
            dispatch(setActiveIndex(activeIndexPhoto-1))
        }else{
            dispatch(setActiveIndex(activePhone.images.length-1))
        }
    }


    return(
        <div className={styles.swiper}>
            <div className={styles.swiper__container}>
                <img onClick={() => onClickClose()} src={closeIcon} alt="icon close" className={styles.swiper__close}/>
                <div className={styles.swiper__slider}>
                    <img onClick={() => onClickPrevious()} className={`${styles.swiper__arrow} ${styles.swiper__arrow_left}`} height={26} width={26} src={arrowIcon} alt="arrow icon"/>
                    <img className={styles.swiper__photo} src={activePhone.images[activeIndexPhoto]} alt="phone's photo"/>
                    <img onClick={() => onClickNext()} className={`${styles.swiper__arrow} ${styles.swiper__arrow_right}`} height={26} width={26} src={arrowIcon} alt="arrow icon"/>
                </div>
            </div>
        </div>
    )
}

export default Swiper;