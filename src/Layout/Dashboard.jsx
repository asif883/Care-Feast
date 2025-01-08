import { Outlet } from "react-router-dom";
import DashboardNav from "../Component/DashboardNav";

const Dashboard = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-3 bg-gray-100 min-h-screen">
                <DashboardNav/>
            </div>
            <div className="col-span-9">
                <Outlet/>
            </div>
        </div>
    );
};

export default Dashboard;