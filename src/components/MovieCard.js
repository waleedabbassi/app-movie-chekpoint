
import { Link } from "react-router-dom";

const MovieCard = ( {movie} ) => {



  return (
    <div className="movie-card" >
      <img src={movie.posterURL} alt={movie.title} />
      <h3 >
        <Link to="/description">{movie.title}</Link>
      </h3>
      <p >{movie.description}</p>
      <p >Rating: {movie.rating}</p>
      
    </div>
  );
};

export default MovieCard;
