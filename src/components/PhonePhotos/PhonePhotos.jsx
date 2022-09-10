import React from 'react';
import styles from './PhonePhotos.module.scss';
import {useDispatch, useSelector} from "react-redux";

import {setActiveIndex} from "../../redux/slices/swiperSlice";

const PhonePhotos = ({item}) => {

    const activeIndex = useSelector(state => state.swiper.activeIndex)
    const phone = useSelector(state => state.phones.active);
    const dispatch  = useDispatch();

    const onClickSliderPhoto = (index) => {
        dispatch(setActiveIndex(index))
    }

    return (
        <div className={styles.PhonePhotos}>
            <div className={styles.PhonePhotos__container}>
                <ul className={`${styles.PhonePhotos__list} ${styles.list}`}>
                    {phone.images.map((image, index) => {
                        return (
                            <li key={`${phone.id}_${image}`} className={`${styles.list__item} ${styles.item}`}>
                                <img onClick={() => onClickSliderPhoto(index)} src={image} alt="photo of phone"/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default PhonePhotos;