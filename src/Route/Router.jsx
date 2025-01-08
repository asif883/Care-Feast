import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Overview from "../Component/Overview";
import PatientDetails from "../Component/PatientDetails";
import FoodChart from "../Component/FoodChart";
import TrackDelivery from "../Component/TrackDelivery";
import Management from "../Component/Management";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
      children: [
         {
            path: '/overview',
            element:<Overview/>
         },
         {
            path: 'patient-details',
            element: <PatientDetails/>
         },
         {
            path: 'food-chart',
            element: <FoodChart/>
         },
         {
            path: 'track-delivery',
            element: <TrackDelivery/>
         },
         {
            path: 'management',
            element: <Management/>
         },
      ]
    }
  ]);


export default router; 