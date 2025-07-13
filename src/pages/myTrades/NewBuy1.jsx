import { IoIosArrowForward } from 'react-icons/io'
import './mytrades.css'
import { Link } from 'react-router-dom'
const NewBuy1 = () => {
  return (
    <>
    <div className='container-wrap'>
        <div className="container">
          <div className="inquiry-step">
            <div className="step-title-wrap">
              <h2 className="step-title">매수/임차 중개의뢰</h2>
              <div className="step-indicator">
                <span className="step-number active">1</span>
                <span className="step-label">의뢰구분 선택</span>
              </div>
            </div>
            <div className="option-grid">
              <div className="option-group">
                <label>거래구분</label>
                <div className="button-group">
                  <button className="option-btn active">전세</button>
                  <button className="option-btn">월세</button>
                  <button className="option-btn">매매</button>
                  <button className="option-btn">단기임대</button>
                </div>
              </div>

              <div className="option-group">
                <label>매물유형</label>
                <div className="button-group">
                  <button className="option-btn active">아파트</button>
                  <button className="option-btn">주상복합</button>
                  <button className="option-btn">연립/빌라</button>
                  <button className="option-btn">오피스텔</button>
                  <button className="option-btn">도시형</button>
                  <button className="option-btn">다가구주택</button>
                  <button className="option-btn">상가주택</button>
                  <button className="option-btn">원룸주택</button>
                  <button className="option-btn">단독/전원</button>
                  <button className="option-btn">한옥주택</button>
                  <button className="option-btn">타운하우스</button>
                </div>
              </div>
            </div>

            <p className="notice-msg">
              <i className="ico"></i> 중개 의뢰할 거래구분과 매물유형을 선택하신 후 [다음]을 클릭하십시오.
            </p>
            <div className='btn-area'>
              <Link to="/myBuy/newBuy2" className="btn">다음 <IoIosArrowForward size={16}/></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewBuy1