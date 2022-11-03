import React from 'react';
import { Navigate, NavLink, useParams } from 'react-router-dom';
import users from '../data/users';

const UserProfile = () => {
    const userId = parseInt(useParams().userId);

    const user = users.find((u) => u._id === userId);

    return (
        <>
            {user ? (
                <div>
                    <h3>Профиль пользователя</h3>
                    <div>
                        <span style={{ fontWeight: 'bold' }}>Идентификатор:</span>
                        <span>{user._id}</span>
                    </div>
                    <div>
                        <span style={{ fontWeight: 'bold' }}>Имя:</span>
                        <span>{user.name}</span>
                    </div>
                </div>
            ) : (
                <Navigate to="/users" replace={true} />
            )}
            <hr />
            <NavLink to={`/users/${userId}/edit`}>Редактировать</NavLink>
            <span> | </span>
            <NavLink to="/users">Пользователи</NavLink>
        </>
    );
};

export default UserProfile;
