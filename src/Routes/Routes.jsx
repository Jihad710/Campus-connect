import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";








import Blog from "../Pages/Blog/Blog";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path : '/',
                element: <Home></Home>
                
            },
            {
                path : 'login',
                element: <Login></Login>
                
            },
            {
                path : 'colleges',
                element: <Colleges></Colleges>
                
            },
            {
                path : 'admission',
                element: <Admission></Admission>
                
            },
            {
                path : 'mycollege',
                element: <MyCollege></MyCollege>
                
            },
            {
                path : 'signup',
                element: <SignUp></SignUp>
                
            },
           
          
            {
                path : 'blog',
                element: <Blog></Blog>
                
            }
        ],

        
    },
    
]);