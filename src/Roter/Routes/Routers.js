import Main from "../../Layout/Main";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Home from "../../Pages/Home/Home/Home";
import Order from "../../Pages/Order/Order";
import Login from "../../Pages/Shared/Login/Login";
import Register from "../../Pages/Shared/Register/Register";



const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
{
    path: '/',
    element: <Main></Main>,
    children: [
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/services/:id',
        element: <CheckOut></CheckOut>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
    },
    {
        path: '/order',
        element: <Order></Order>
    }
    ]
}
]);

export default router;