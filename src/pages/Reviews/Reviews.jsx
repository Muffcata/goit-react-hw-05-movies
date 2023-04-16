import { getReviewsMovie } from 'components/services/fetchAPI';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from 'pages/Reviews/Reviews.module.css';
import { Spinner } from 'components/Spinner/Spinner';
import PropTypes from 'prop-types';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const queryParams = useParams();
  const id = queryParams.movieId;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const reviewsMovie = async () => {
      try {
        const fetchedReviewsMovies = await getReviewsMovie.fetchReviewsMovie(
          id
        );
        setReviews([...fetchedReviewsMovies.results]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    reviewsMovie(id);
  }, [id]);

  return (
    <div>
      {isLoading && <Spinner />}
      <ul className={style.list}>
        {reviews && reviews.length ? (
          reviews.map(({ id, author, content }) => (
            <li className={style.item} key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;

Reviews.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};
