//import logo from './logo.svg';
import { useState } from 'react';
import { Movies } from './Movies';
import './App.css';

//import MovieCard from './components/MovieCard';
import MovieList from './components/MovieList';
import Nav from './components/Nav';
import AddMovie from './components/AddMovie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Trailer from './components/Trailer';


function App() {
  const [movie, setMovie] = useState(Movies)
  const [inp, setInp] = useState('')
  const [etoile, setEtoile] = useState(1)
  const handleRating = (z) => setEtoile(z);
  const changement = (y) => setInp(y);
  const handleMovie = (newMovie) => setMovie([...movie,newMovie]);
  return (
    <div className="App">    
     <BrowserRouter>
     <div className="top">    
        <div className="column is-full featured_wrapper p-0">
        <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/banner.jpg" alt='hi' className="featured" />
        </div>    
    </div>
    <Nav ch={changement} x={etoile} handleRating={handleRating} />

      <Routes>
        <Route path="/:id" element={<Trailer movie={movie}/>} />
        <Route path="/" element={<MovieList movie={movie.filter(el => (el.MovieName.toUpperCase().includes(inp.toUpperCase())) && (el.Rating>=etoile) )} />} />
      </Routes>
      <AddMovie add={handleMovie} />
  </BrowserRouter>  
    </div>
  );
}

export default App;
