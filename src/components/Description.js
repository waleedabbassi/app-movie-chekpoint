import React from 'react';
import { useParams, Link } from 'react-router-dom';







const  Description = ({movies})  =>{
    
    const { id } = useParams();
    const movie= movies( (m) => m.id === parseInt(id) );
    if (!movie){
        return <h1>movie not found</h1>
    }
return (
<div className='desc'>
    

    

    <p>Description of {movie.title}</p>

    <h1>{ movie.description}</h1>
    <p >Rating: {movie.rating}</p>

    <iframe width="560" height="315" src={movie.posterURL} 
    title="YouTube video player"
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen></iframe>


    <Link to="/"> Back </Link>
    

</div>
);
}

export default Description;