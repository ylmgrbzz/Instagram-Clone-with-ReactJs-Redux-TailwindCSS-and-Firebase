import Login from './pages/login'
import Home from './pages/home'
import AuthLayout from './pages/auth'

const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            }
        ]

    },

]

export default routes
