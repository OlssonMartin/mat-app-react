import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Meal from './components/Meal/Meal';
import MealDetails from './components/MealDetails/MealDetails';
import SearchResult from './components/SearchResult/SearchResults';
import Footer from './components/Footer/Footer'
import './App.css';
import { RecipeProvider } from './RecipeContext';

function App() {
  return (
    <RecipeProvider>
    <Router>
      <Navbar />
      <div className="container">
          <Routes>
            <Route path="/" element={<Meal />} />
            <Route path="/meal/:idMeal" element={<MealDetails />} />
            <Route path="/searchresults" element={<SearchResult />} />
         </Routes>
        <Footer/>
      </div>
    </Router>
    </RecipeProvider>
  );
}

export default App;