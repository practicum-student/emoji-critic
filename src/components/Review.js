import "./Review.css";
import { useParams } from "react-router-dom";
// import the useNavigate hook
import { useNavigate } from "react-router-dom";

function Review({ reviews }) {
  // access the hook inside of the component
  const navigate = useNavigate();
  const params = useParams();
  let id = params.reviewId;
  id = id - 1;

  return (
    <div className="review">
      {reviews && (
        <div className="review__item">
          <h3>{reviews[id].title}</h3>
          <p>{reviews[id].text}</p>
          <p className="review__rating">Final rating:{reviews[id].rating}/5</p>

          <button onClick={() => navigate("/reviews")}>
            Back to the review list
          </button>
        </div>
      )}
    </div>
  );
}

export default Review;
