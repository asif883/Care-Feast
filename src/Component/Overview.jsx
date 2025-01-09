import { Doughnut, Bar } from "react-chartjs-2";
import "chart.js/auto";

const Overview = () => {
  const mealStatusData = {
    labels: ["Prepared", "Pending"],
    datasets: [
      {
        data: [90, 10],
        backgroundColor: ["#4CAF50", "#FF7043"],
      },
    ],
  };

  const dietBreakdownData = {
    labels: ["Diabetic", "Low Sodium", "Gluten-Free"],
    datasets: [
      {
        label: "Number of Patients",
        data: [40, 30, 50],
        backgroundColor: ["#4CAF50", "#FF7043", "#42A5F5"],
      },
    ],
  };

  const recentPatients = [
    { name: "John Doe", room: "101" },
    { name: "Jane Smith", room: "205" },
  ];

  const recentDeliveries = [
    { room: "301", meal: "Morning Meal", status: "Delivered" },
    { room: "404", meal: "Evening Meal", status: "Delivered" },
  ];

  const lowInventory = ["Rice: 5kg remaining", "Vegetables: Stock almost empty"];
  const delayedDeliveries = [
    { room: "101", meal: "Morning Meal", delay: "10 mins late" },
    { room: "205", meal: "Evening Meal", delay: "20 mins late" },
  ];

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
        Overview Dashboard
      </h1>

      {/* Metrics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="card bg-primary text-white p-4">
          <h3 className="text-lg font-bold">Total Patients</h3>
          <p className="text-3xl">120</p>
          <p className="text-sm">5 with special diets</p>
        </div>
        <div className="card bg-secondary text-white p-4">
          <h3 className="text-lg font-bold">Meals Prepared</h3>
          <p className="text-3xl">90</p>
          <p className="text-sm">10 pending</p>
        </div>
        <div className="card bg-accent text-white p-4">
          <h3 className="text-lg font-bold">Deliveries</h3>
          <p className="text-3xl">80</p>
          <p className="text-sm">20 pending</p>
        </div>
        <div className="card bg-info text-white p-4">
          <h3 className="text-lg font-bold">Staff Members</h3>
          <p className="text-3xl">15</p>
          <p className="text-sm">5 delivery personnel</p>
        </div>
      </div>

      {/* Alerts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {/* Delayed Deliveries */}
        <div className="bg-red-100 text-red-800 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Delayed Deliveries</h3>
          <ul className="list-disc ml-5 space-y-1">
            {delayedDeliveries.map((delivery, index) => (
              <li key={index}>
                Room {delivery.room} - {delivery.meal} ({delivery.delay})
              </li>
            ))}
          </ul>
        </div>

        {/* Low Inventory */}
        <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Low Pantry Inventory</h3>
          <ul className="list-disc ml-5 space-y-1">
            {lowInventory.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <h3 className="font-bold mb-2 text-center sm:text-left">Meal Status</h3>
          <Doughnut data={mealStatusData} />
        </div>
        <div>
          <h3 className="font-bold mb-2 text-center sm:text-left">
            Patient Diet Breakdown
          </h3>
          <Bar data={dietBreakdownData} />
        </div>
      </div>

      {/* Recent Activities Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Recently Added Patients */}
        <div>
          <h3 className="font-bold mb-2">Recently Added Patients</h3>
          <ul className="list-disc ml-5 space-y-1">
            {recentPatients.map((patient, index) => (
              <li key={index}>
                {patient.name} - Room {patient.room}
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Deliveries */}
        <div>
          <h3 className="font-bold mb-2">Recent Deliveries</h3>
          <ul className="list-disc ml-5 space-y-1">
            {recentDeliveries.map((delivery, index) => (
              <li key={index}>
                Room {delivery.room} - {delivery.meal} ({delivery.status})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Overview;
