const searchRecipe = (searchValue) => {
    const newUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
    setUrl(newUrl);
    
    fetch(newUrl)
        .then(res => res.json())
        .then(data => {
            if (data && data.meals) {
                setItem(data.meals);
                setShow(true);
            } else {
                setItem([]);
                setShow(false);
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setShow(false);
        });
};
