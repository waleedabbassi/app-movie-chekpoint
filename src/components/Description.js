import React from 'react';
import { useParams, Link } from 'react-router-dom';


function Description() {
const { movie } = useParams();
return (
<div className='desc'>
    <h1>{movie}</h1>
    <p>Description of {movie}</p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" title="Trailer" frameborder="0"
    allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <Link to="/">Back to Home</Link>
</div>
);
}

export default Description;