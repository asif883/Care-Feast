import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Overview from "../Component/Overview";
import PatientDetails from "../Component/PatientDetails";
import FoodChart from "../Component/FoodChart";
import TrackDelivery from "../Component/TrackDelivery";
import Management from "../Component/Management";
import PrivateRoute from "./PrivateRoute";
import Login from "../Component/Login";
import Register from "../Component/Register";

const router = createBrowserRouter([
     {
      path: '/login',
      element: <Login/>
     },
     {
      path: '/register',
      element: <Register/>
     },
     {
      path: "/dashboard",
      element: <PrivateRoute><Dashboard/></PrivateRoute>,
      children: [
         {
            path: '/dashboard/overview',
            element:<Overview/>
         },
         {
            path: '/dashboard/patient-details',
            element: <PatientDetails/>
         },
         {
            path: '/dashboard/food-chart',
            element: <FoodChart/>
         },
         {
            path: '/dashboard/track-delivery',
            element: <TrackDelivery/>
         },
         {
            path: '/dashboard/management',
            element: <Management/>
         },
      ]
    }
  ]);


export default router; 