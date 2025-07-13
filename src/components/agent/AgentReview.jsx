import { IoIosStar } from "react-icons/io";
import StarRating from "../form/StarRating";
const AgentReview = () => {
  return (
    <>
       <div className="review-summary">
        고객 평점 (4) ｜ 전문성: <span className="highlight">6.4</span>/10
        적극성: <span className="highlight">7.5</span>/10
        만족도: <span className="highlight">10</span>/10
      </div>
      <ul className="review-list">
        <li className="review-item">
          <div className="status">계약완료</div>
          <div className="date">23.08.19</div>
          <ul className="rating-list">
            <li><span className="text">전문성:</span> 
                <StarRating value={5} />
            </li>
            <li><span className="text">적극성:</span> 
              <StarRating value={3} />
            </li>
            <li><span className="text">만족도:</span> 
               <StarRating value={3} />
            </li>
          </ul>
        </li>
        <li className="review-item">
          <div className="status">계약완료</div>
          <div className="date">23.08.19</div>
          <ul className="rating-list">
            <li><span className="text">전문성:</span> 
                <StarRating value={1} />
            </li>
            <li><span className="text">적극성:</span> 
              <StarRating value={2} />
            </li>
            <li><span className="text">만족도:</span> 
               <StarRating value={3} />
            </li>
          </ul>
        </li>
        <li className="review-item">
          <div className="status end">계약종료</div>
          <div className="date">23.08.19</div>
          <ul className="rating-list">
            <li><span className="text">전문성:</span> 
                <StarRating value={4} />
            </li>
            <li><span className="text">적극성:</span> 
              <StarRating value={4} />
            </li>
            <li><span className="text">만족도:</span> 
               <StarRating value={3} />
            </li>
          </ul>
        </li>
      </ul>
    </>
  )
}

export default AgentReview