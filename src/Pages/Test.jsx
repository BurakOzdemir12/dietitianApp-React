import React, { useState, useEffect } from 'react';

const FoodsList = () => {
  const [foods, setFoods] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoods = async () => {
      const apiKey = '00I3f9i4BmqHNpBEjbpbHnkkjKIozyAcjB30jXra'; // Buraya kendi API anahtarınızı koyun
      const url = `https://api.nal.usda.gov/fdc/v1/foods/search?query=meat&api_key=${apiKey}`; // Örneğin "apple" kelimesi ile arama yapılıyor.

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setFoods(data.foods || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);
console.log(foods)
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
     <div>
      <h1>Food Results</h1>
      {foods.length === 0 ? (
        <p>No foods found</p>
      ) : (
        <ul className='text-dark'>
          {foods.map((food) => (
            <li key={food.fdcId}>
              <h3>{food.description}</h3>
              <p>Brand: {food.brandOwner || 'N/A'}</p>
              <h4>Nutrition Facts:</h4>
              <ul>
                {food.foodNutrients && food.foodNutrients.length > 0 ? (
                  food.foodNutrients.map((nutrient) => (
                    <li key={nutrient.nutrientId}>
                      {nutrient.nutrientName}: {nutrient.value} {nutrient.unitName}
                    </li>
                  ))
                ) : (
                  <li>No nutrition data available</li>
                )}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FoodsList;
