import './form.css'
// 좌측 화살표
export const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className="slick-arrow slick-prev"
      onClick={onClick}
      style={{ ...style }}
      aria-label="Previous Slide"
    >
      &#10094;
    </button>
  );
};

// 우측 화살표
export const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className="slick-arrow slick-next"
      onClick={onClick}
      style={{ ...style }}
      aria-label="Next Slide"
    >
      &#10095;
    </button>
  );
};