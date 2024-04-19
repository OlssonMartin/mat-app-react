import React from 'react';
import { useRecipeContext } from '../../RecipeContext'; 
import styles from './Recipe.module.css'; 

const Recipe = () => {
    const { item } = useRecipeContext(); 
    let id = "";

    if (item && item.strYoutube) {
        const strYoutube = item.strYoutube;
        const str = strYoutube.split("=");
        id = str[str.length - 1];
    }

    return (
        <>
            {!item ? "" : (
                <div className={styles.content}>
                    <img src={item.strMealThumb} alt="" className={styles.image} />
                    <div className={styles.innerContent}>
                        <h1>{item.strMeal}</h1>
                        <h2>{item.strArea} Food</h2>
                        <h3>Category {item.strCategory}</h3>
                    </div>
                    <div className={styles.recipeDetails}>
                        <div className={styles.ingredients}>
                            <h2>Ingredients</h2><br />
                            {Array.from({ length: 8 }).map((_, index) => {
                                const ingredient = item[`strIngredient${index + 1}`];
                                const measure = item[`strMeasure${index + 1}`];
                                return ingredient ? <h4 key={index}>{ingredient}: {measure}</h4> : null;
                            })}
                        </div>
                        <div className={styles.instructions}>
                            <h2>Instructions</h2><br />
                            <h4>{item.strInstructions}</h4>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Recipe;
