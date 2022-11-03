import { Navigate } from "react-router-dom";
import Home from "./components/Home";
import UserEdit from "./components/UserEdit";
import UserProfile from "./components/UserProfile";
import UsersList from "./components/UsersList";
import UserProfileLayout from "./layouts/UserProfileLayout";
import UsersLayout from "./layouts/UsersLayout";

const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/users',
        element: <UsersLayout />,
        children: [
            {
                path: '',
                element: <UsersList />
            },
            {
                path: ':userId',
                element: <UserProfileLayout />,
                children: [
                    {
                        path: '',
                        element: <Navigate to="profile" />
                    },
                    {
                        path: 'profile',
                        element: <UserProfile />
                    },
                    {
                        path: 'edit',
                        element: <UserEdit />
                    },
                    {
                        path: '*',
                        element: <Navigate to="profile" />
                    }
                ]
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to="/" />
    }
];

export default routes;
