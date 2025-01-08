import { Outlet } from "react-router-dom";
import DashboardNav from "../Component/DashboardNav";

const Dashboard = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2 bg-gray-200 min-h-screen">
                <DashboardNav/>
            </div>
            <div className="col-span-10">
                <Outlet/>
            </div>
        </div>
    );
};

export default Dashboard;