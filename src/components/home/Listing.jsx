import Slider from "react-slick";
import './home.css'
import { PrevArrow, NextArrow } from '../form/CustomArrows'; 
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

export const Listing = () => {
   const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="listing">
      <div className="link">
        <a href="#" className='link-arr'>전체보기<IoIosArrowForward /></a>
      </div>
      <div className="listing-items">
        <Slider {...settings}>
            <div className="listings-slider">
              <div className="listing-card">
                <Link to="/visitReq">
                  <figure><img src="/realhouse-pc/images/thumnail-room.jpg" alt="매물" /></figure>
                  <div className="info">
                    <strong className="price">매매 3억 5000</strong>
                    <p className="details">3룸 · 3층 · 82㎡(25평) / 100㎡(33평)</p>
                    <div className="tags">
                      <span className="tag orange">빌라</span>
                      <span className="tag gray">주차 가능</span>
                    </div>
                    <p className="address">잠실주공1단지 104동잠실</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="listings-slider">
              <div className="listing-card">
                <Link to="/visitReq">
                  <figure><img src="/realhouse-pc/images/thumnail-room.jpg" alt="매물" /></figure>
                  <div className="info">
                    <strong className="price">매매 3억 5000</strong>
                    <p className="details">3룸 · 3층 · 82㎡(25평) / 100㎡(33평)</p>
                    <div className="tags">
                      <span className="tag orange">빌라</span>
                      <span className="tag gray">주차 가능</span>
                    </div>
                    <p className="address">잠실주공1단지 104동잠실</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="listings-slider">
              <div className="listing-card">
                <Link to="/visitReq">
                  <figure><img src="/realhouse-pc/images/thumnail-room.jpg" alt="매물" /></figure>
                  <div className="info">
                    <strong className="price">매매 3억 5000</strong>
                    <p className="details">3룸 · 3층 · 82㎡(25평) / 100㎡(33평)</p>
                    <div className="tags">
                      <span className="tag orange">빌라</span>
                      <span className="tag gray">주차 가능</span>
                    </div>
                    <p className="address">잠실주공1단지 104동잠실</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="listings-slider">
              <div className="listing-card">
                <Link to="/visitReq">
                  <figure><img src="/realhouse-pc/images/thumnail-room.jpg" alt="매물" /></figure>
                  <div className="info">
                    <strong className="price">매매 3억 5000</strong>
                    <p className="details">3룸 · 3층 · 82㎡(25평) / 100㎡(33평)</p>
                    <div className="tags">
                      <span className="tag orange">빌라</span>
                      <span className="tag gray">주차 가능</span>
                    </div>
                    <p className="address">잠실주공1단지 104동잠실</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="listings-slider">
              <div className="listing-card">
                <Link to="/visitReq">
                  <figure><img src="/realhouse-pc/images/thumnail-room.jpg" alt="매물" /></figure>
                  <div className="info">
                    <strong className="price">매매 3억 5000</strong>
                    <p className="details">3룸 · 3층 · 82㎡(25평) / 100㎡(33평)</p>
                    <div className="tags">
                      <span className="tag orange">빌라</span>
                      <span className="tag gray">주차 가능</span>
                    </div>
                    <p className="address">잠실주공1단지 104동잠실</p>
                  </div>
                </Link>
              </div>
            </div>
            
        </Slider>
      </div>
    </div>
  )
}
