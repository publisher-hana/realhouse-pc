import { IoIosStar } from "react-icons/io";
import './form.css'; 

const StarRating = ({ value = 0, max = 5 }) => {
  return (
   <div className="stars">
      {Array.from({ length: max }, (_, i) => (
        <span key={i} className={i < value ? "on" : ""}>
          <IoIosStar size={16} />
        </span>
      ))}
    </div>
  );
};

export default StarRating;