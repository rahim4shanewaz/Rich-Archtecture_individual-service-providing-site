import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/bolg/Blog";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AddReview from "../privateRoute/addReview/AddReview";
import AddServices from "../privateRoute/addServices/AddServices";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/addreview',
                element: <AddReview></AddReview>
            },
            {
                path:'/addservices',
                element: <AddServices></AddServices>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
        ]

    }
]);

export default router;