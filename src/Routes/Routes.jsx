import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import DashBoard from "../Layout/DashBoard";
import Projects from "../Layout/DashBoard/Projects";
import WidgetConfig from "../Layout/DashBoard/WidgetConfig";
import ErrorPage from "../Pages/ErrorPage";
import Project from "../Layout/Project";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'login',
                element: <Login/>
            }
            ,
            {
                path: 'signup',
                element: <Signup/>

            }
        ]
    },
    {
        path: 'project',
        element: <Project></Project>
    },
    {
        path: 'dashboard',
        element: <DashBoard/>,
        errorElement: <ErrorPage/>,
        children: [
            {
               path: 'projects',
               element: <Projects/> 
            },
            {
                path: 'widget-configuration',
                element: <WidgetConfig/>
            }
        ]
    }
]);

export default router;
