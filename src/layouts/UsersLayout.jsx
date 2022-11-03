import React from 'react';
import { Outlet } from 'react-router-dom';

const UsersLayout = () => {
    return (
        <div>
            <h1>Пользователи</h1>
            <hr />
            <Outlet />
        </div>
    );
};

export default UsersLayout;
