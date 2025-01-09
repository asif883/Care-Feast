import { NavLink } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbListDetails } from "react-icons/tb";
import { IoFastFoodOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineManageAccounts } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { BsPersonAdd } from "react-icons/bs";
import "../Css/dash.css";
import useAuth from "../Hooks/useAuth";
import logo from '../../src/assets/Care-feast.png'


const Routes = [
  {
    id: 1,
    label: "Overview",
    icon: <LuLayoutDashboard />,
    link: "/dashboard/overview",
  },
  {
    id: 2,
    label: "Add Patient",
    icon: <BsPersonAdd/>,
    link: "/dashboard/add-patient",
  },
  {
    id: 3,
    label: "Patient Details",
    icon: <TbListDetails/>,
    link: "/dashboard/patient-details",
  },
  {
    id: 4,
    label: "Food Charts",
    icon: <IoFastFoodOutline/>,
    link: "/dashboard/food-chart",
  },
  {
    id: 5,
    label: "Track Delivery",
    icon: <TbTruckDelivery/>,
    link: "/dashboard/track-delivery",
  },
  {
    id: 6,
    label: "Management",
    icon: <MdOutlineManageAccounts/>,
    link: "/dashboard/management",
  },
];

const DashboardNav = () => {
   const {logout} = useAuth()
  return (
    <div className="p-4">
      <div className="text-center border-b border-gray-300 pb-4">
        <p className="text-center text-3xl font-bold text-[#324560] flex gap-1 items-center">
        <img className="w-12 rounded-full" src={logo} alt="logo" /> Care-Feast
        </p>
      </div>
      <div className="py-6 space-y-3">
        {Routes.map((route) => (
          <NavLink
            className="flex items-center gap-2 text-[#444546] font-semibold border border-gray-300 rounded-xl px-5 py-2"
            to={route.link}
            key={route.id}
          >
            {route.icon && <span>{route.icon}</span>}
            {route.label}
          </NavLink>
        ))}
         <button onClick={() => logout ()} className="flex items-center gap-2 text-[#444546] font-semibold border border-gray-300 rounded-xl px-5 py-2 w-full">
          <CiLogout/>  Logout
         </button>
      </div>
    </div>
  );
};

export default DashboardNav;
