import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Detail = () => {
  // const [loading, setLoading] = useState(true);
  // const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    // setMovie(json.data.movie);
    // setLoading(false);
  };
  useEffect(() => {
    getMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {/* {loading ? ( */}
      <h1>Loading...</h1>
      {/* ) : (
        <div>
          {movie.map((mv) => (
            <h1>{mv.title}</h1>
      //     ))} */}
    </div>
    // )}
  );
};

export default Detail;
