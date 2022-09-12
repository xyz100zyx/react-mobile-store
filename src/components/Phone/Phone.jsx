import React from "react";
import {Link} from "react-router-dom";
import styles from './Phone.module.scss';
import likeSvg from '../../assets/Phone/like-svg.svg';
import {useDispatch, useSelector} from "react-redux";
import {addChosenPhones, deleteChosenPhones} from "../../redux/slices/cartSlice";

const Phone = ( {item} ) => {

    const dispatch = useDispatch();
    const liked = useSelector(state => state.cart.chosenPhones);

    const onClickLike = (item) => {
        dispatch(addChosenPhones(item))
        console.log(`worked`)
    }

    const onClickDelLike = (item) => {
        dispatch(deleteChosenPhones(item))
    }


    return (
        <div className={styles.phone}>
            <Link to={`/${item.manufacturer}/${item.id}`}><img className={styles.phone__img} src={item.images[0]} alt="Picture"/></Link>
            {
                liked.map(likedItem => {
                    if (likedItem.id === item.id) {
                        return <img key={`${item.id}_lik`} className={`${styles.phone__like}`} src={likeSvg} alt="like button"/>
                    }else{
                        return <img key={`${item.id}_dis`} className={styles.phone__like} src={likeSvg} alt="like button"/>
                    }
                })
            }
            <p className={styles.phone__type}>Смартфон</p>
            <h3 className={styles.phone__name}><Link to={`/${item.manufacturer}/${item.id}`}>Смартфон {item.manufacturer} {item.model}</Link></h3>
            <h5 className={styles.phone__price}>от {item.price} руб.</h5>
        </div>
    )
}

export default Phone;