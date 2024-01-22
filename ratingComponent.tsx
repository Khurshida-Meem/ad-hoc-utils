import { useState } from "react";
import StarIcon from '@mui/icons-material/Star';

const StarRating = ({
  totalStars = 5,
  initialRating = 0,
  onRatingChange,
}: any) => {
  const [rating, setRating] = useState(initialRating);
  const [hoveredRating, setHoveredRating] = useState<null | number>(null);

  const handleStarClick = (selectedRating: any) => {
    const newRating = selectedRating === rating ? initialRating : selectedRating;
    setRating(newRating);
    setHoveredRating(null)
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            onClick={() => handleStarClick(starValue)}
            onMouseEnter={() => setHoveredRating(starValue)}
            onMouseLeave={() => setHoveredRating(null)}
            style={{
              cursor: "pointer",
              fontSize: "28px",
              color:
                hoveredRating !== null
                  ? starValue <= hoveredRating
                    ? "rgba(255, 180, 0, 1)"
                    : "rgba(0, 0, 0, 0.38)"
                  : starValue <= rating
                  ? "rgba(255, 180, 0, 1)"
                  : "rgba(0, 0, 0, 0.38)",
            }}
          >
            {/* &#9733; */}
            <StarIcon />
          </span>
        );
      })}
    </div>
  );
};

// Example usage
//const HRating = (props: any) => {
//  const handleRatingChange = (newRating: any) => {
//    props?.setRating(newRating);
//  };

//  return (
//   <div>
//      <StarRating
//        totalStars={props?.totalStars}
//        initialRating={props?.initialRating}
//        onRatingChange={handleRatingChange}
//      />
//    </div>
//  );
//};

//export default HRating;
