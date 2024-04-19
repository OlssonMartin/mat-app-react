import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './MealDetails.module.css'; 

const MealDetails = () => {
  const { idMeal } = useParams();
  const [mealDetails, setMealDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (idMeal) {
      setLoading(true);
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          if (data.meals) {
            setMealDetails(data.meals[0]);
          } else {
            setError('No meal details found');
          }
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [idMeal]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!mealDetails) return <p>No meal details available.</p>;

  return (
    <div className={styles.mealDetails}>
      <button onClick={() => navigate(-1)} className={styles.backButton}>Tillbaka</button>
      <h1 className={styles.mealTitle}>{mealDetails.strMeal}</h1>
      <img src={mealDetails.strMealThumb} alt={mealDetails.strMeal} className={styles.mealImage} />
      <p><strong>Category:</strong> {mealDetails.strCategory}</p>
      <p><strong>Area:</strong> {mealDetails.strArea}</p>
      <p className={styles.instructions}><strong>Instructions:</strong> {mealDetails.strInstructions}</p>
      <h2>Ingredients</h2>
      <ul className={styles.ingredientsList}>
        {Object.keys(mealDetails).filter(key => key.startsWith('strIngredient') && mealDetails[key]).map(key => (
          <li key={key}>{mealDetails[key]} - {mealDetails[`strMeasure${key.slice(13)}`]}</li>
        ))}
      </ul>
    </div>
  );
};

export default MealDetails;
