import { useState } from "react";
const OfferType = ({ setActiveBox }) => {
    const [selectedType, setSelectedType] = useState(""); // 거래구분용 상태
  const [selectedType2, setSelectedType2] = useState(""); // 매물유형용 상태


  return (
    <>
      <button className='btn-close'  onClick={() => setActiveBox(null)}><span className='blind'>닫기</span></button>
      <div className='top-area'>
        <h3>매물구분</h3>
      </div>
      <div className="offer-type-box">
        <div className="row border-btm">
          <div className="label">거래구분</div>
          <div className="options">
            {["전세", "월세", "매매", "단기임대"].map((label) => (
              <button
                key={label}
                className={`option-btn ${selectedType === label ? "active" : ""}`}
                onClick={() => setSelectedType(label)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="label">매물유형</div>
          <div className="options">
            {[
              "아파트", "주상복합", "연립/빌라", "오피스텔", "도시형", "다가구주택",
              "상가주택", "원룸주택", "단독/전원", "한옥주택", "타운하우스"
            ].map((label) => (
              <button
                key={label}
                className={`option-btn ${selectedType2 === label ? "active" : ""}`}
                onClick={() => setSelectedType2(label)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default OfferType