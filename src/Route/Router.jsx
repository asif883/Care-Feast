import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Overview from "../Component/Overview";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
      children: [
         {
            path: '/dashboard/overview',
            element:<Overview/>
         }
      ]
    }
  ]);


export default router; 