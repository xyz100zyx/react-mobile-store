import React, {useRef} from "react";
import {Link} from "react-router-dom";
import styles from './Phone.module.scss';
import likeSvg from '../../assets/Phone/like-svg.svg';
import unlikeSvg from '../../assets/Phone/unlike-svg.svg';
import {useDispatch, useSelector} from "react-redux";
import {addChosenPhones, deleteChosenPhones} from "../../redux/slices/cartSlice";
import {setActivePhone} from "../../redux/slices/phonesSlice";
import {setActiveManufacturer} from "../../redux/slices/filterSlice";

const Phone = ( {item} ) => {
    const dispatch = useDispatch();
    const liked = useSelector(state => state.cart.chosenPhones);

    const isInLiked = (item) => {
        const is = liked.find(phone => phone.id == item.id)
        if (is === undefined) return unlikeSvg;
        else return likeSvg;
    }

    const onClickLike = (item) => {
        dispatch(addChosenPhones(item))
    }

    const onClickDelLike = (item) => {
        dispatch(deleteChosenPhones(item))
    }

    const toggleLike = (item) => {
        const is = liked.find(phone => (phone.id === item.id))
        if (is === undefined) {
            dispatch(addChosenPhones(item))
        }
        else {
            dispatch(deleteChosenPhones(item))
        }
    }

    const onClickPhone = (item) => {
        switch (item.manufacturer) {
            case 'Poco':
                dispatch(setActiveManufacturer(1))
                break;
            case 'Apple iPhone':
                dispatch(setActiveManufacturer(2))
                break;
            case 'Samsung':
                dispatch(setActiveManufacturer(3))
                break;
            case 'Xiaomi':
                dispatch(setActiveManufacturer(4))
                break;
        }
        dispatch(setActivePhone(item))
    }


    return (
        <div className={styles.phone}>
            <Link to={`/${item.manufacturer.toLowerCase()}/${item.id}`}><img onClick={() => onClickPhone(item)} className={styles.phone__img} src={item.images[0]} alt="Picture"/></Link>
            <img onClick={() => toggleLike(item)} className={styles.phone__like} src={isInLiked(item)} alt="like button"/>
            <p className={styles.phone__type}>Смартфон</p>
            <h3 className={styles.phone__name}><Link to={`/${item.manufacturer}/${item.id}`}>Смартфон {item.manufacturer} {item.model}</Link></h3>
            <h5 className={styles.phone__price}>от {item.price} руб.</h5>
        </div>
    )
}

export default Phone;