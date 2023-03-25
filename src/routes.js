import Login from './pages/login'
import MainLayout from './pages/layout'
import Register from './pages/register'
import Home from './pages/home'
import AuthLayout from './pages/auth'
import PrivateRoute from "./components/PrivateRoute";


const routes = [
    {
        path: '/',
        element: <MainLayout />,
        auth: true,
        children: [
            {
                index: true,
                element: <Home />
            },
            // {
            //     path: 'logout',
            //     element: <Logout />
            // },
            // {
            //     path: ':username',
            //     element: <ProfileLayout />,
            //     children: [
            //         {
            //             index: true,
            //             element: <ProfilePosts />
            //         },
            //         {
            //             path: 'tagged',
            //             element: <ProfileTagged />
            //         }
            //     ]
            // },
            // {
            //     path: 'inbox',
            //     element: <InboxLayout />,
            //     children: [
            //         {
            //             index: true,
            //             element: <Inbox />
            //         },
            //         {
            //             path: ':conversationId',
            //             element: <Chat />
            //         }
            //     ]
            // }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]

    },

]

const authCheck = routes => routes.map(route => {
    if (route?.auth) {
        route.element = <PrivateRoute>{route.element}</PrivateRoute>
    }
    if (route?.children) {
        route.children = authCheck(route.children)
    }
    return route
})

export default authCheck(routes)
