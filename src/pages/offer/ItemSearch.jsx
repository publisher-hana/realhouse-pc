import { useEffect } from "react";
import SetHeader from "../../components/filter/SetHeader"
import './offerPage.css'
import OfferAside from "../../components/pageAside/OfferAside";
const ItemSearch = () => {
 useEffect(() => {
    // 클래스 추가
    document.body.classList.add("no-scroll");
    document.querySelector('.footer').classList.add("hidden");

    // 컴포넌트 언마운트 시 클래스 제거
    return () => {
      document.body.classList.remove("no-scroll");
      document.querySelector('.footer').classList.remove("hidden");
    };
  }, []);
  return (
    <div className='container-wrap'>
      <SetHeader />
      <div className="item-search-wrap">
        <div className="map-area">
          <div className="map">
            
            <img src="/realhouse-pc/images/map.jpg"  alt="map" />
          </div>
          <button className="cluster" style={{ top: '130px', left: '170px' }}>
            <div className="cluster-count">30</div>
            <div className="cluster-label">잠실동</div>
          </button>
           <button className="cluster" style={{ top: '260px', left: '680px' }}>
            <div className="cluster-count">100</div>
            <div className="cluster-label">신천동</div>
          </button>
          <button className="cluster" style={{ top: '380px', left: '200px' }}>
            <div className="cluster-count">120</div>
          </button>
        </div>
        <OfferAside />
      </div>
        
    </div>
  )
}

export default ItemSearch