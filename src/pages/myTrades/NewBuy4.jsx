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
                <span className="step-number">1</span>
                <span className="step-number">2</span>
                <span className="step-number">3</span>
                <span className="step-number active">4</span>
                <span className="step-label">방문시간 선택</span>
              </div>
            </div>
            <div className="option-grid">
              <div className="option-group">
                <label>방문시간 선택</label>
                <select className='select'><option>방문일 선택</option><option>2023.04.04(월)</option><option>2023.04.05(화)</option><option>2023.04.06(수)</option><option>2023.04.07(목)</option></select>
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