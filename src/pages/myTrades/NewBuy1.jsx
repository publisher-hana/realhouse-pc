import { IoIosArrowForward } from 'react-icons/io'
import './mytrades.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
const NewBuy1 = () => { 
  const [selectedProperty, setSelectedProperty] = useState('아파트');
  const transactionTypes = [
    { value: 'jeonse', label: '전세' },
    { value: 'monthlyRent', label: '월세' },
    { value: 'sale', label: '매매' },
    { value: 'shortTermRent', label: '단기임대' },
  ];
  const [selectedTransaction, setSelectedTransaction] = useState(transactionTypes[0].value);
  const propertyTypes = [
    '아파트', '주상복합', '연립/빌라', '오피스텔', '도시형',
    '다가구주택', '상가주택', '원룸주택', '단독/전원', '한옥주택', '타운하우스'
  ];

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
                  {transactionTypes.map(({ value, label }) => (
                    <button
                      key={value}
                      className={`option-btn ${selectedTransaction === value ? 'active' : ''}`}
                      onClick={() => setSelectedTransaction(value)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="option-group">
                <label>매물유형</label>
                <div className="button-group">
                  {propertyTypes.map((type) => (
                    <button 
                      key={type}
                      className={`option-btn ${selectedProperty === type ? 'active' : ''}`}
                      onClick={() => setSelectedProperty(type)}>{type}</button>
                   ))}
                </div>
              </div>
            </div>

            <div className="notice-msg">
              <i className="ico"></i> 중개 의뢰할 거래구분과 매물유형을 선택하신 후 [다음]을 클릭하십시오.
            </div>
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