import React from "react";
import {Link} from "react-router-dom";
import styles from './Phone.module.scss';
import likeSvg from '../../assets/Phone/like-svg.svg';

const Phone = ( {item} ) => {

    return (
        <div className={styles.phone}>
            <Link to={`/phone/${item.id}`}><img className={styles.phone__img} src={item.images[0]} alt=""/></Link>
            <img className={styles.phone__like} src={likeSvg} alt="like button"/>
            <p className={styles.phone__type}>Смартфон</p>
            <h3 className={styles.phone__name}><Link to={`/phone/${item.id}`}>Смартфон {item.manufacturer} {item.model}</Link></h3>
            <h5 className={styles.phone__price}>от {item.price} руб.</h5>
        </div>
    )
}

export default Phone;