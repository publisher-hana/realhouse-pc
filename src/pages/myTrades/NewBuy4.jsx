import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
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
                <h3 className='title-label'>방문시간 선택</h3>
                <div className='flex-group'>
                  <select className='select'><option>방문일 선택</option><option>2023.04.04(월)</option><option>2023.04.05(화)</option><option>2023.04.06(수)</option><option>2023.04.07(목)</option></select>
                  <button className='btn-emerald'>시간 선택</button>
                </div>
                <p className='desc'>※ 금일포함 <span>7일</span>까지 선택 가능</p>
              </div>
            </div>

            <div className="notice-msg">
              <i className="ico"></i> 
              <div>
                <ul>
                  <li>1. 공인중개사가 전문가의 입장에서 좋은 매물을 추천합니다.</li>
                  <li>2. 추천매물을 확인 후, 마음에 드는 매물을 추가 방문요청하십시오.(나의 매수에서 추가 방문요청 가능)</li>
                  <li>3. 방문일시에 중개사무소를 방문하면 여러 개의 매물을 한번에 확인할 수 있어 빠르게 계약하실 수 있습니다.</li>
                </ul>
                <p className='point'>※ 중개사무소 방문일은 당일을 피하시는 것이 좋습니다.</p>
              </div>
            </div>
             <div className='btn-area'>
              <Link to="/myBuy/newBuy3" className="btn btn-prev"><IoIosArrowBack size={16}/>이전</Link>
              <Link to="/myBuy/newBuy5" className="btn btn-next">다음 <IoIosArrowForward size={16}/></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewBuy1