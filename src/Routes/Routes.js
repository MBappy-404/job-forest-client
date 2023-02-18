import { createBrowserRouter } from "react-router-dom";
import Contact from "../Contact/Contact";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";


const router = createBrowserRouter ([
    {
     path:'/',
     element: <Main></Main>,
     children: [
          {
               path:'/',
               element: <Home></Home>
          },
          {
               path:'/home',
               element: <Home></Home>
          },
          {
               path:'/about',
               element: <About></About>
          },
          {
               path: '/contact',
               element: <Contact></Contact>
          },
          {
               path: '/signIn',
               element: <SignIn></SignIn>
          },
          {
               path: '/signUp',
               element: <SignUp></SignUp>
          }
     ]
    }

])

export default router