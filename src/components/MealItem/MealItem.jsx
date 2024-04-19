import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MealItem.module.css';  

const MealItem = ({ data }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.card} onClick={() => navigate(`/meal/${data.idMeal}`)}>
            <img src={`${data.strMealThumb}/preview`} alt={data.strMeal} className={styles.image} />
            <h3 className={styles.title}>{data.strMeal}</h3>
        </div>
    );
};

export default MealItem;
