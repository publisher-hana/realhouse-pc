import Slider from "react-slick";
import './home.css'
const Visual = () => {
   const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000,
  };
  return (
      <section className="visual-section">
        <div className="visual-content">
          <div className="visual-text">
            <h1>허위 매물 없는,<br />진짜 매물만 제공하는 <span className="highlight">리얼하우스</span></h1>
          </div>
          <div className="search-box">
            <input type="text" placeholder="지역, 역세권, 단지명을 검색하세요" />
            <button>검색</button>
          </div>
        </div>
         <Slider {...settings}>
          <div className="visual-img">
            <img src='/realhouse-pc/images/visual/visual1.jpg' alt="비주얼 이미지" />
          </div>
          <div className="visual-img">
            <img src='/realhouse-pc/images/visual/visual2.jpg' alt="비주얼 이미지" />
          </div>
        </Slider>
      </section>
  )
}

export default Visual