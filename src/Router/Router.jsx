
import { createBrowserRouter } from 'react-router-dom';
import Layouts from '../Layouts/Layouts';
import Home from '../Pages/Home';
import AuthLayouts from '../Layouts/AuthLayouts';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AddTutorials from '../Pages/AddTutorials';
import FindTutors from '../Pages/FindTutors';
import TutorDetails from '../Components/TutorDetails';
import MyTutorials from '../Pages/MyTutorials';
import UpdateTutorial from '../Components/UpdateTutorial';
import MyBookTutors from '../Pages/MyBookTutors';
import ErrorPage from '../Pages/ErrorPage';
import PrivateRoutes from './PrivateRoutes';
import ContactUs from '../Components/ContactUs';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/add-tutorials",
        element: <PrivateRoutes><AddTutorials></AddTutorials></PrivateRoutes>
      },
      {
        path: "/find-tutors/:category",
        element: <FindTutors></FindTutors>
      },
      {
        path: "/find-tutors",
        element: <FindTutors></FindTutors>
      },
      {
        path: "/my-tutorials",
        element: <PrivateRoutes><MyTutorials></MyTutorials></PrivateRoutes>
      },
      {
        path: "/tutors/:id",
        element: <TutorDetails></TutorDetails>
      },
      
      {
        path: "/update-tutorial/:id",
        element: <UpdateTutorial></UpdateTutorial>
      },
      {
        path: "/my-bookTutors",
        element: <PrivateRoutes><MyBookTutors></MyBookTutors></PrivateRoutes>
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>
      }
      

    ]

  },
  {
    path: "auth",
    element: <AuthLayouts></AuthLayouts>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },

]);


export default Router;