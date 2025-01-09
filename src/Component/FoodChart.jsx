const FoodChart = () => {
   
    const mealPlan = {
      morning: {
        ingredients: ["Oatmeal", "Banana", "Honey", "Almond Milk"],
        instructions: "No sugar, use honey instead of sugar.",
      },
      evening: {
        ingredients: ["Grilled Chicken", "Steamed Vegetables", "Brown Rice"],
        instructions: "Low salt, no added butter.",
      },
      night: {
        ingredients: ["Greek Yogurt", "Mixed Berries", "Chia Seeds"],
        instructions: "No added sugar, consume before bed.",
      },
    };
  
    return (
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Patient's Meal Plan</h2>
  
        {/* Morning Meal */}
        <div className="mb-6 p-6 bg-blue-50 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Morning Meal</h3>
          <div className="mb-4">
            <p className="text-lg font-medium text-gray-700 mb-2"><strong>Ingredients:</strong></p>
            <ul className="list-disc pl-5 text-gray-600">
              {mealPlan.morning.ingredients.map((ingredient, index) => (
                <li key={index} className="text-lg">{ingredient}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-lg font-medium text-gray-700"><strong>Instructions:</strong> {mealPlan.morning.instructions}</p>
          </div>
        </div>
  
        {/* Evening Meal */}
        <div className="mb-6 p-6 bg-green-50 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Evening Meal</h3>
          <div className="mb-4">
            <p className="text-lg font-medium text-gray-700 mb-2"><strong>Ingredients:</strong></p>
            <ul className="list-disc pl-5 text-gray-600">
              {mealPlan.evening.ingredients.map((ingredient, index) => (
                <li key={index} className="text-lg">{ingredient}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-lg font-medium text-gray-700"><strong>Instructions:</strong> {mealPlan.evening.instructions}</p>
          </div>
        </div>
  
        {/* Night Meal */}
        <div className="p-6 bg-purple-50 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-purple-700 mb-4">Night Meal</h3>
          <div className="mb-4">
            <p className="text-lg font-medium text-gray-700 mb-2"><strong>Ingredients:</strong></p>
            <ul className="list-disc pl-5 text-gray-600">
              {mealPlan.night.ingredients.map((ingredient, index) => (
                <li key={index} className="text-lg">{ingredient}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-lg font-medium text-gray-700"><strong>Instructions:</strong> {mealPlan.night.instructions}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default FoodChart;
  