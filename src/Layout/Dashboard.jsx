import { Outlet } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import DashboardNav from "../Component/DashboardNav";

const Dashboard = () => {
    return (
        <div className="">

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-8">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn drawer-button mb-6 lg:hidden">
                    <RiMenu2Line size={24}/>
                    </label>
                   <Outlet/>
                   
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="bg-gray-50  min-h-full w-80 p-8">
                    {/* Sidebar content here */}
                        <DashboardNav/>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;