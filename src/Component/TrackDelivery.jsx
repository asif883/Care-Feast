import { useState, useEffect } from "react";

const TrackDelivery = () => {
  
  const [mealStatus, setMealStatus] = useState({
    morning: { preparation: "Pending", delivery: "Pending" },
    evening: { preparation: "Pending", delivery: "Pending" },
    night: { preparation: "Pending", delivery: "Pending" },
  });

  
  useEffect(() => {
    const fetchStatus = () => {
      
      setMealStatus({
        morning: { preparation: "In Progress", delivery: "Pending" },
        evening: { preparation: "Pending", delivery: "Pending" },
        night: { preparation: "Pending", delivery: "Pending" },
      });
    };
    fetchStatus();
  }, []);

  const updateStatus = (meal, stage, status) => {
    setMealStatus((prev) => ({
      ...prev,
      [meal]: {
        ...prev[meal],
        [stage]: status,
      },
    }));
  };

  return (
    <div className="p-6  bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Meal Delivery Tracker</h2>

      {Object.keys(mealStatus).map((meal) => (
        <div key={meal} className="mb-6 border-b border-cyan-600 border-dashed pb-4">
          <h3 className="text-xl md:text-2xl underline text-cyan-600 font-semibold capitalize mb-2">{meal} Meal</h3>
          <div className="space-y-2">
            <div>
              <span className="font-medium text-gray-500">Preparation Status:</span> {" "}
              <span  className="text-gray-800 font-semibold">{mealStatus[meal].preparation}</span>
            </div>
            <div>
              <span className="font-medium text-gray-500">Delivery Status:</span> {" "}
              <span className="text-gray-800 font-semibold">{mealStatus[meal].delivery}</span>
            </div>
          </div>
          <div className="mt-4 flex gap-2 flex-col-reverse  md:flex-row space-x-2">
            <button
              className="px-4 py-2 border-2 border-cyan-600 text-cyan-600 font-medium rounded-md"
              onClick={() => updateStatus(meal, "preparation", "Completed")}
            >
              Mark Preparation Complete
            </button>
            <button
              className="px-4 py-2 bg-cyan-500 text-white rounded-md"
              onClick={() => updateStatus(meal, "delivery", "Delivered")}
            >
              Mark Delivered
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackDelivery;
