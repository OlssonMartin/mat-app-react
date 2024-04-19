import React, { createContext, useState, useContext, useEffect } from 'react';

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [item, setItem] = useState(null); 
    const [show, setShow] = useState(false);

    const fetchInitialMeals = () => {
        const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data && data.meals) {
                    setSearchResults(data.meals);
                } else {
                    setSearchResults([]);
                }
            })
            .catch(error => {
                console.error('Error fetching initial meals:', error);
            });
    };

    const searchRecipe = (searchValue) => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data && data.meals) {
                    setSearchResults(data.meals);
                } else {
                    setSearchResults([]);
                    setShow(false);
                }
            })
            .catch(error => {
                console.error('Error fetching search results:', error);
                setShow(false);
            });
    };

    useEffect(() => {
        fetchInitialMeals();
    }, []);

    const value = {
        search,
        setSearch,
        searchResults,
        setSearchResults,
        item,
        setItem,
        show,
        setShow,
        searchRecipe,
        fetchInitialMeals
    };

    return (
        <RecipeContext.Provider value={value}>
            {children}
        </RecipeContext.Provider>
    );
};

export const useRecipeContext = () => useContext(RecipeContext);
