import React from 'react';
import { useParams, Link } from 'react-router-dom';




function Description() {
const { movie } = useParams();
return (
<div className='desc'>
    <h1>{movie}</h1>
    <p>Description of {movie}</p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/AKu7CigaE3A" 
    title="YouTube video player"
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen></iframe>
    <Link to="/"> Back </Link>
</div>
);
}

export default Description;