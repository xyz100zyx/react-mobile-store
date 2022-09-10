import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import styles from './Home.module.css';
import Phones from "../../components/Phones/Phones";

const Home = () => {
    return (
        <>
            <Navigation />
            <Phones />
        </>
    )
}

export default Home;