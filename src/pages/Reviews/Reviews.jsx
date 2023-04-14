import { getReviewsMovie } from 'components/services/fetchAPI';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const queryParams = useParams();
  const id = queryParams.movieId;

  useEffect(() => {
    const reviewsMovie = async () => {
      try {
        const fetchedReviewsMovies = await getReviewsMovie.fetchReviewsMovie(
          id
        );
        setReviews([...fetchedReviewsMovies.results]);
      } catch (error) {
        console.log(error);
      }
    };
    reviewsMovie(id);
  }, [id]);

  return (
    <div>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
