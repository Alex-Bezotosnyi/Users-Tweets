import React from 'react';
import HomeCSS from "./Home.module.scss"

const Home = () => {
    return (
        <div className={HomeCSS.wrapper}>
            <h3>Server Port: 3002</h3>
            <h1>Homework #24</h1>
            <h2>Redux та асинхронність</h2>
        </div>
    );
};

export default Home;