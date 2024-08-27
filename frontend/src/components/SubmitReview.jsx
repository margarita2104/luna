
import WriteReview from "./WriteReview.jsx";
import PropTypes from "prop-types";

const SubmitReviewPage = ({ restaurantId }) => {
  return (
    <div>
      <h2>Submit Your Review</h2>
      <WriteReview restaurantId={restaurantId} />
    </div>
  );
};
SubmitReviewPage.propTypes = {
  restaurantId: PropTypes.number.isRequired,
};

export default SubmitReviewPage;