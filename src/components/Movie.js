import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ id, coverImage, title, summary, genres }) => {
  return (
    <div>
      <img src={coverImage} alt={title} />
      <h3>
        <Link to={`movie/${id}`}>{title}</Link>
      </h3>
      <div>{summary}</div>
      <ul>
        {genres.map((genre) => (
          <li>{genre}</li>
        ))}
      </ul>
    </div>
  );
};

Movie.PropType = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
