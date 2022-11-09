import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AllServices from "../pages/allServices/AllServices";
import Blog from "../pages/bolg/Blog";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AddReview from "../privateRoute/addReview/AddReview";
import AddServices from "../privateRoute/addServices/AddServices";
import PrivateRoute from "../privateRoute/PrivateRoute/PrivateRoute";
import ServicesAndRevews from "../privateRoute/ServicesAndReviews/ServicesAndRevews";

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
                element: <PrivateRoute><AddReview></AddReview></PrivateRoute>
            },
            {
                path:'/addservices',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path:'/allservices',
                element:<AllServices></AllServices>
            },
            {
                path:'/service.reviews',
                element:<PrivateRoute><ServicesAndRevews></ServicesAndRevews></PrivateRoute>
            },
            {
                path:'/review',
                element: <AddReview></AddReview>
            }
        ]

    }
]);

export default router;