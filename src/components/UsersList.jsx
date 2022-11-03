import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import users from '../data/users';

const UsersList = () => {
    return (
        <>
            <div>
                <ul>
                    {users.map((u) => (
                        <li key={u._id}>
                            <Link to={`/users/${u._id}/profile`}>{u.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <hr />
            <NavLink to="/">Домашняя страница</NavLink>
        </>
    );
};

export default UsersList;
