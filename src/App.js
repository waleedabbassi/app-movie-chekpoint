import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import './App.css';
import NavBar1 from  './components/NavBar1' ;
import Description from './components/Description';
import { Route, Routes } from "react-router-dom";





const App = () => {
  const [movies, setMovies] = useState([       /* The movies state variable is an array of objects, where each object represents a movie and has properties  */
    { id: 1, title: 'Movie 1', description: 'Description 1', posterURL:'https://fr.web.img6.acsta.net/pictures/22/12/02/16/03/2536613.jpg', rating: 7 },
    { id: 2, title: 'Movie 2', description: 'Description 2', posterURL: 'https://media.senscritique.com/media/000004710747/300/inception.jpg', rating: 8.5 },
    { id: 3, title: 'Movie 3', description: 'Description 3', posterURL: 'https://assets.afcdn.com/album/D20221116/phalbm26106368_w320.webp', rating: 5.0 },
    { id: 4, title: 'Movie 4', description: 'Description 4', posterURL: 'https://www.pathe.tn/media/movie/alex/HO00000058/poster/md/2/movie&uuid=70BF0396-B224-4A2D-82C4-7691AC396E18', rating: 3.0 },
    { id: 5, title: 'Movie 5', description: 'Description 5', posterURL: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/CasablancaPoster-Gold.jpg', rating: 9.0 },
    { id: 6, title: 'Movie 6', description: 'Description 6', posterURL: 'https://lumiere-a.akamaihd.net/v1/images/image_b1c09a80.jpeg?region=0,0,540,810&width=480', rating: 7.2 },
  ]);
  const [titleFilter, setTitleFilter] = useState('');   /*  declares and initializes two state variables using the useState hook */ 
  const [ratingFilter, setRatingFilter] = useState('');

  const handleTitleFilterChange = e => {           /* The handleTitleFilterChange function is a callback function that takes an event object e as an argument. It is intended to be used as an event handler for changes to the input field that filters the titles of a list of items.  */
    setTitleFilter(e.target.value);                /* When the input field is changed, the handleTitleFilterChange function is called, and it updates the titleFilter state variable to the new value of the input field.  */ 
  };

  const handleRatingFilterChange = e => {
    setRatingFilter(e.target.value);
  };

  const filteredMovies = movies.filter(movie => {                                /* filter the movies array based on user input in the titleFilter and ratingFilter input.   */
    return movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&      /* The first condition checks if the title property of each movie, converted to lowercase, includes the titleFilter state variable, also converted to lowercase. This allows for case-insensitive searching of the movie titles.  */ 
          (ratingFilter === '' || movie.rating >= ratingFilter);                 /* The second condition checks if the rating property of each movie is greater than or equal to the ratingFilter state variable. If the ratingFilter state variable is an empty string, all movies will be returned regardless of their rating.    */ 
  });                                                                            /* The use of the logical || operator in the second condition allows for the filter to work even if the ratingFilter state variable is not set or if it is set to an empty string.    */

  const handleAddMovie = () => {
    const newMovie = {                               /*adding a new movie to the existing array of movies.   */ 
      id: movies.length + 1,
      title: 'New Movie',
      description: 'New Description',
      posterURL: 'https://via.placeholder.com/150',
      rating: 0
    };
    setMovies([...movies, newMovie]);                 /*  The setMovies() function is used to update the state of the movies variable. The new state is created by using the spread operator (...) to create a copy of the current movies array and adding the newMovie object to the end of the array.    */   
  };


  return (
    <div className="App"  >
    <NavBar1/>
      <Filter                                         /* The props passed to the Filter component are titleFilter, ratingFilter, onTitleFilterChange, and onRatingFilterChange. These props are used to configure the behavior of the Filter component and allow it to communicate with the parent component.    */
        titleFilter={titleFilter}
        ratingFilter={ratingFilter}
        onTitleFilterChange={handleTitleFilterChange}         /* onTitleFilterChange and onRatingFilterChange are callback functions that will be invoked when the user changes the corresponding input fields of the Filter component. These functions will likely update the corresponding state variables in the parent component based on the user input   */
        onRatingFilterChange={handleRatingFilterChange}
        
      />
      <button onClick={handleAddMovie} >Add Movie</button>

      <MovieList movies={filteredMovies} />



      <Routes>
      <Route path="/" element={<App />} />
      <Route path="/description" element={<Description />} />
      </Routes>



    </div>
  );
};

export default App;
