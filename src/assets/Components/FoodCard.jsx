import { useState, useEffect } from 'react';
import "./FoodCard.css";
import FoodCardSimmer from './FoodCardSimmer';

const FoodCard = () => {
  // State to hold the fetched food data
  const [foodData, setFoodData] = useState([]);

  // Fetch data from the provided API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://ik.imagekit.io/sti8lrsqsa/data.json?updatedAt=1705155581559");
        const data = await response.json();
        setFoodData(data);
      } catch (error) {
        console.error("Error fetching food data:", error);
      }
    };

    fetchData();
  }, []);

  if (foodData.length === 0) {
    return <FoodCardSimmer/>
  }
    return (
    <>
      <div className="food-cards-container">
        {/* Map through the fetched foodData and render FoodCards */}
        {foodData.map((food, index) => (
          <div key={index} className="food-card" >
            <img draggable="false" src={food.image} alt={`${food.name} Image`} />
            <h3 className="FoodName">{food.name}</h3>
            <p className="Foodescription">{food.description}</p>
            <p className="FoodPrice">Price: ${food.price}</p>
            <button className="AddToCart">Add to Cart</button>
            <div className="additional-details">
              <p className="Rating">Rating: {food.rating}/5</p>
              <p className="Time">Preparation Time: {food.time} mins</p>
              {/* Additional details can be added here */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FoodCard;
