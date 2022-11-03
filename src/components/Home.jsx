import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Домашняя страница</h1>
            <hr />
            <NavLink to="/users">Пользователи</NavLink>
        </div>
    );
};

export default Home;
