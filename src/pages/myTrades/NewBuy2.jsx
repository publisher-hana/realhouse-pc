import { useEffect } from "react";
import './mytrades.css'
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ReqAside from "../../components/pageAside/ReqAside";
const NeweBuy2 = () => {
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
    <>
      <div className='container-wrap'>
        <div className="left-area scroll-container inquiry-step">
          <div className="left-layout">
            <div className="step-title-wrap">
              <h2 className="step-title">매수/임차 중개의뢰</h2>
              <div className="step-indicator">
                <span className="step-number">1</span>
                <span className="step-number active">2</span>
                <span className="step-label">방문요청 매물 선택</span>
              </div>
            </div>
            <section className="section">
              <div className="image-gallery">
                <img src="/realhouse-pc/images/thumnail-room.jpg" alt="대표 이미지" className="main-image" />
                <div className="thumb-list">
                  <div className="img"><img src="/realhouse-pc/images/offering_img1.jpg" alt="서브1" /></div>
                  <div className="img">
                    <div className="thumb-overlay">
                      <span>+</span> 15개 사진 전체보기
                    </div>
                    <img src="/realhouse-pc/images/offering_img3.jpg" alt="서브2" />
                  </div>
                  {/* <div className="thumb-overlay">
                    <span>15개 사진 전체보기</span>
                  </div> */}
                </div>
              </div>

              <div className="summary-info">
                <div className="info-box">
                  <label>월세보증금/월세</label>
                  <strong>1억1000/50만원</strong>
                </div>
                <div className="info-box">
                  <label>전용면적</label>
                  <strong>33.9㎡(10)</strong>
                </div>
                <div className="info-box">
                  <label>방수/욕실수</label>
                  <strong>원룸(개방형)/1개</strong>
                </div>
              </div>

              <div className="address-row">
                <span className="type">아파트</span>
                <strong className="address">잠실주공1단지 102동</strong>
                <span className="status red">급매</span>
              </div>
              <table className="detail-table">
                <caption>매물정보 메인테이블</caption>
                <colgroup><col width="130px" /><col /></colgroup>
                <tbody>
                  <tr><th scope="row">해당층/건물층</th><td>6/15층</td></tr>
                  <tr><th scope="row">입주일</th><td>2023.09(15년)</td></tr>
                  <tr><th scope="row">융자금</th><td>시세 30% 미만</td></tr>
                  <tr><th scope="row">관리비</th><td>10만원(TV, 전기, 수도)</td></tr>
                  <tr><th scope="row">엘리베이터</th><td>있음</td></tr>
                  <tr><th scope="row">주차</th><td>가능</td></tr>
                  <tr><th scope="row">입주 예정일</th><td>즉시입주</td></tr>
                  <tr><th scope="row">반려동물</th><td>불가능</td></tr>
                  <tr><th scope="row">옵션</th><td>세탁기, 냉장고, 가스레인지, 비데</td></tr>
                </tbody>
              </table>
            </section>
            <section className="section">
              <h2 className="section-title">매물정보</h2>
              <table className="detail-table">
                <caption>매물정보 추가정보테이블</caption>
                <colgroup><col width="130px" /><col /></colgroup>
                <tbody>
                  <tr><th scope="row">매물 유형</th><td>공동주택 / 아파트</td></tr>
                  <tr><th scope="row">매물 용도</th><td>주거용</td></tr>
                  <tr><th scope="row">해당 동</th><td>102동</td></tr>
                  <tr><th scope="row">전용/공급면적</th><td>84.9㎡(25.7)/111.1㎡(33.6)</td></tr>
                  <tr><th scope="row">총 동수</th><td>3동</td></tr>
                  <tr><th scope="row">현관구조</th><td>계단식</td></tr>
                  <tr><th scope="row">총 주차수</th><td>300대(세대당 1대)</td></tr>
                  <tr><th scope="row">소재지</th><td>서울시 송파구 잠실동</td></tr>
                </tbody>
              </table>
            </section>
            <section className="section">
              <h2 className="section-title">매물설명</h2>
              <div className="offer-info-box">
                공인중개사가 작성한 설명이 나타납니다.
                <br/>공인중개사가 작성한 설명이 나타납니다.
              </div>
            </section>
            <section className="section location-section">
              <h2 className="section-title">위치</h2>
              <div className="location-box">
                <div className="location-address">서울시 송파구 잠실동(잠실주공1단지)</div>
                <div className="map-area">
                   {/* 실제로는 iframe, 지도 API, 캔버스 등으로 들어갈 수 있음  */}
                  <img src="/realhouse-pc/images/map.jpg" alt="지도 이미지" />
                </div>
                <div className="navi">30m</div>
              </div>
            </section>
             <div className='btn-area'>
              <Link to="/myBuy/newBuy1" className="btn btn-prev"><IoIosArrowBack size={16}/>이전</Link>
              <Link to="/myBuy/newBuy3" className="btn btn-next">다음 <IoIosArrowForward size={16}/></Link>
            </div>
          </div>
        </div>
        <ReqAside />
      </div>
    </>
  )
}
export default NeweBuy2