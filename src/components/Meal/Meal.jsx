import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeContext } from '../../RecipeContext';
import MealItem from '../MealItem/MealItem';
import styles from './Meal.module.css';  

const Meal = () => {
    const navigate = useNavigate();
    const { search, setSearch, searchResults, searchRecipe, fetchInitialMeals } = useRecipeContext();
    const searchInputRef = useRef(null);


    useEffect(() => {
        fetchInitialMeals(); 
        searchInputRef.current.focus();
    }, []);

    const handleSearchChange = (e) => setSearch(e.target.value);

    const handleSearchClick = async () => {
        if (search.trim()) {
            await searchRecipe(search);
            setSearch(''); 
            navigate('/searchresults');
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.headerTitle}>Välkommen till Fridelli</h1>
            <div className={styles.searchBox}>
                <input type="search" className={styles.searchBar} value={search} onChange={handleSearchChange} ref={searchInputRef}/>
                <button onClick={handleSearchClick} className={styles.searchButton}>Sök</button>
            </div>
            <div className={styles.mealList}>
                {searchResults.map(item => (
                    <MealItem key={item.idMeal} data={item} />
                ))}
            </div>
        </div>
    );
};

export default Meal;
