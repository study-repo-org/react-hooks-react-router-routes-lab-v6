import {Link} from 'react-router-dom';

function MovieCard({title}) {
  
  return (
    <article>
        <h2>{title}</h2>
        <Link>{time}</Link>
    </article>
  );
};

export default MovieCard;