import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeContext } from '../../RecipeContext';
import MealItem from '../MealItem/MealItem';
import styles from './Searchresult.module.css';

const SearchResult = () => {
  const navigate = useNavigate();
  const { searchResults, searchRecipe } = useRecipeContext();
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearchChange = (e) => setSearchInput(e.target.value);

  const handleSearchSubmit = async () => {
    if (searchInput.trim()) {
      try {
        setLoading(true);
        setError("");
        await searchRecipe(searchInput); 
        setSearchInput('');
      } catch (err) {
        setError("Ett fel inträffade vid sökningen.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className={styles.searchResult}>
      <h1>Sökresultat</h1>
      <div className={styles.searchBox}>
        <input type="search" className={styles.searchBar} value={searchInput} onChange={handleSearchChange} />
        <button onClick={handleSearchSubmit} className={styles.searchButton}>Sök</button>
      </div>
      <div className={styles.mealList}>
        {searchResults.length > 0 ? (
          searchResults.map(item => <MealItem key={item.idMeal} data={item} />)
        ) : (
          !loading && <p>Inga resultat hittades.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
