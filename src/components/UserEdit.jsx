import React from 'react';
import { useParams, Navigate, NavLink } from 'react-router-dom';
import users from '../data/users';

const UserEdit = () => {
    const userId = parseInt(useParams().userId);

    const user = users.find((u) => u._id === userId);
    const currentUserIndex = users.findIndex((u) => u._id === userId);
    const nextUserIndex = currentUserIndex + 1 === users.length ? 0 : currentUserIndex + 1;
    const nextUserId = users[nextUserIndex]._id;

    return (
        <>
            {user ? (
                <div>
                    <h3>Редактировать свойства пользователя</h3>
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
            <NavLink to={`/users/${userId}`}>Профиль</NavLink>
            <span> | </span>
            <NavLink to={`/users/${nextUserId}`}>Следующий пользователь</NavLink>
            <span> | </span>
            <NavLink to="/users">Пользователи</NavLink>
        </>
    );
};

export default UserEdit;
