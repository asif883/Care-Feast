import { NavLink } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbListDetails } from "react-icons/tb";
import { IoFastFoodOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineManageAccounts } from "react-icons/md";
import "../Css/dash.css";


const Routes = [
  {
    id: 1,
    label: "Overview",
    icon: <LuLayoutDashboard />,
    link: "/overview",
  },
  {
    id: 2,
    label: "Patient Details",
    icon: <TbListDetails/>,
    link: "/patient-details",
  },
  {
    id: 3,
    label: "Food Charts",
    icon: <IoFastFoodOutline/>,
    link: "/food-chart",
  },
  {
    id: 4,
    label: "Track Delivery",
    icon: <TbTruckDelivery/>,
    link: "/track-delivery",
  },
  {
    id: 5,
    label: "Management",
    icon: <MdOutlineManageAccounts/>,
    link: "/management",
  },
];

const DashboardNav = () => {
  return (
    <div className="p-4">
      <h1 className="text-center text-3xl font-bold text-[#324560] border-b border-gray-300 pb-4">
        Care-Feast
      </h1>
      <div className="px-4 py-6 space-y-3">
        {Routes.map((route) => (
          <NavLink
            className="flex items-center gap-2 text-[#87888A] font-semibold border border-gray-300 rounded-xl px-5 py-2"
            to={route.link}
            key={route.id}
          >
            {route.icon && <span>{route.icon}</span>}
            {route.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default DashboardNav;
