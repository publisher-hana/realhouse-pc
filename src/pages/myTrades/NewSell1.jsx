import { IoIosArrowForward } from "react-icons/io"
import { Link } from "react-router-dom"

const NewSell1 = () => {
  return (
    <div className='container-wrap'>
      <div className="container">
        <div className="inquiry-step">
          <div className="step-title-wrap">
            <h2 className="step-title">매도/임대 중개의뢰</h2>
            <div className="step-indicator">
              <span className="step-number active">1</span>
              <span className="step-label">주소 입력</span>
            </div>
          </div>
          <section className="section">
            <div className="option-grid">
              <div className="option-group">
                <h3 className="title-label">매물주소</h3>
                <div className="address-search-group">
                  <input type="text" className="address-input" placeholder="도로명, 지번, 건물명 입력" />
                  <button className="btn-emerald">주소 검색</button>
                </div>
                <p className="desc">※ 도로명, 지번, 건물명 등 통합검색이 가능합니다.</p>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="property-history">
              <h3 className="title-label">이전 의뢰 부동산<span className="count">(3)</span></h3>
              <ul className="property-list">
                <li className="property-item">
                  <span className="property-type">아파트</span>
                  <span className="property-address">서울시 송파구 잠실동 321(잠실삼익그린아파트) 301동 102호</span>
                  <button className="select-button">선택</button>
                </li>
                <li className="property-item">
                  <span className="property-type">단독주택</span>
                  <span className="property-address">서울시 송파구 잠실동 321(잠실삼익그린아파트) 301동 102호</span>
                  <button className="select-button">선택</button>
                </li>
                <li className="property-item">
                  <span className="property-type">아파트</span>
                  <span className="property-address">서울시 송파구 잠실동 321(잠실삼익그린아파트) 301동 102호</span>
                  <button className="select-button">선택</button>
                </li>
              </ul>
            </div>
          </section>
           <div className='btn-area'>
              <Link to="/mySell/newSell2" className="btn">다음 <IoIosArrowForward size={16}/></Link>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default NewSell1