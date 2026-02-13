import { createBrowserRouter } from "react-router";
import Rot from "../Root/Rot";
import Home from "../Home/Home";
import Login from "../Home/Login";
import Register from "../Home/Register";
import MyProfile from "../Components/Myprofile";
import PlantsGrid from "../Components/PlantsGrid";
import ForgotPassword from "../Components/AuthProvider/ForgotPassword";
import PrivateRoute from "./privateRoute";
import Plants from "../Home/Plants";
import PlantDetails from "../Home/PlantDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Rot,
    children:[
      {
        index:true,
        path:'/',
        Component:Home

      },
      {
        path:'login',
        Component:Login,
      },
      {
        path:'register',
        Component:Register
      },
      {
        path:'profile',
        element : <PrivateRoute>
          <MyProfile></MyProfile>
        </PrivateRoute>
      },
      {
        path:'plant',
        Component: Plants,
     
      },
      {
        path : 'forget-password',
        Component : ForgotPassword
      },
      {
        path : 'plants-Details/:id',
        element : <PrivateRoute>
          <PlantDetails></PlantDetails>
        </PrivateRoute>
      }
      

    ]
  },
]);
