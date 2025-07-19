import { Link } from "react-router-dom"

const NewSell4 = () => {
  return (
    <>
      <div className='container-wrap'>
        <div className="container">
          <div className="inquiry-step">
              <div className="step-title-wrap">
                <h2 className="step-title">매수/임차 중개의뢰</h2>
                <div className="step-indicator">
                  <span className="step-label">매수/임차 중개의뢰 완료</span>
                </div>
              </div>
              <div className="info-box">
                <div className="info-header">
                  <h3 className='title-label'>안내</h3>
                </div>

                <div className="info-body">
                  <ol className="info-list">
                    <li>요청한 공인중개사가 중개의뢰 승인 후, 확인을 위해 전화 연락합니다.</li>
                    <li>공인중개사가 매물의 상세정보 입력을 위해 방문할 수 있습니다.</li>
                    <li>좋은 조건으로 빠른 거래를 위해 공인중개사와 금액을 협의하십시오.</li>
                    <li>매물의 사진을 등록하시면 더욱 빠르게 거래하실 수 있습니다.</li>
                  </ol>

                  <p className="info-paragraph">오전 9시 ~ 오후 6시 이후에 요청한 의뢰는 익일 공인중개사가 전화드릴 수 있습니다.<br/>
                  잠시만 기다리시면 곧 연락을 드리겠습니다.</p>

                  <p className="info-paragraph">매물이 등록되면 매물의 중개현황을 실시간 확인하실 수 있습니다.</p>

                  <hr className="info-divider" />

                  <p className="info-paragraph emphasis">
                    공인중개사가 중개의뢰를 거절하거나 2시간(업무시간 기준) 동안 의뢰를 승인하지 않을 경우<br/>
                    거리와 평점을 고려하여 다른 공인중개사에게 자동 중개의뢰 요청 처리됩니다.
                  </p>
                </div>
              </div>
              <div className='btn-area'>
                <Link to="/myBuy" className="btn-blue">확인</Link>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewSell4