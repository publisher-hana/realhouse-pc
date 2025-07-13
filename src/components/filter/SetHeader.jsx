import { useState } from 'react';
import './filter.css'
import Area from './Area';
import OfferType from './OfferType';
import { Price } from './Price';
import FloorArea from './FloorArea';
import { FilterSec } from './FilterSec';
import Cover from '../common/Cover';
 
const SetHeader = () => {
  const [activeBox, setActiveBox] = useState(null); 
 
  return (
    <>
      <div className='filter-bar'>
        <div className='filter-bar-inner'>
          <h2 className='title'>설정</h2>
          <div className="filter-group">
            <button className={`filter with-divider ${activeBox === "area" ? "selected" : ""}`}  onClick={() => setActiveBox(activeBox === "area" ? null : "area")}>
              서울시
              <span>|</span>
              강남구
              <span>|</span>
              도산대로
            </button>
            <button className={`filter with-divider ${activeBox === "offer" ? "selected" : ""}`} onClick={() => setActiveBox(activeBox === "offer" ? null : "offer")}>월세 <span>|</span> 아파트,오피스텔</button>
            <button className={`filter with-divider ${activeBox === "price" ? "selected" : ""}`} onClick={() => setActiveBox(activeBox === "price" ? null : "price")}>금액 <i className="icon-down"></i></button>
            <button className={`filter ${activeBox === "floorArea" ? "selected" : ""}`} onClick={() => setActiveBox(activeBox === "floorArea" ? null : "floorArea")}>면적 <i className="icon-down"></i></button>
            <button className={`filter ${activeBox === "filter" ? "selected" : ""}`} onClick={() => setActiveBox(activeBox === "filter" ? null : "filter")}>필터 <i className="icon-down"></i></button>
          </div>
        </div>
      </div>
      {activeBox === "area" && (
        <>
          <Cover className="on" />
          <div className="filter-box on">
            <Area setActiveBox={setActiveBox} />
          </div>
        </>
      )}

      {activeBox === "offer" && (
        <>
          <Cover className="on" />
          <div className="filter-box on">
            <OfferType setActiveBox={setActiveBox} />
          </div>
        </>
      )}
      {activeBox === "price" && (
        <>
          <Cover className="on" />
          <div className="filter-box on">
            <Price setActiveBox={setActiveBox} />
          </div>
        </>
      )}
      {activeBox === "floorArea" && (
        <>
          <Cover className="on" />
          <div className="filter-box on">
            <FloorArea setActiveBox={setActiveBox} />
          </div>
        </>
      )}
      {activeBox === "filter" && (
        <>
          <Cover className="on" />
          <div className="filter-box on">
            <FilterSec setActiveBox={setActiveBox} />
          </div>
        </>
      )}
    </>
  )
}

export default SetHeader