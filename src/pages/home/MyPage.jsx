import { Listing } from '../../components/home/Listing'
import { AppLink } from '../../components/home/AppLink'
import './homePage.css'
import { FiSettings } from "react-icons/fi";
import MyPoint from '../../components/home/MyPoint';
import { IoIosArrowForward } from "react-icons/io";
const MyPage = () => {
  return (
    <div className='container-wrap'>
      <div className="container mypage-profile">
        <section className='section'>
          <div className="user-info">
            <div className="text">
              <h2>홍길동</h2>
              <p>your@email.com / 010-000-0000</p>
            </div>
            <button className="setting-btn">
               <span>설정</span>
              <FiSettings size={16} />
            </button>
          </div>
        </section>
        <section className='section'>
          <div className="card-container">
            <div className="info-card">
              <h3>
                1대1 문의 <span className="badge">1</span>
              </h3>
              <p>궁금한 내용이나 개선사항 등을 올리시면 빠르게 답변드립니다.</p>
              <a href="#" className='link-arr'>1대1 문의 바로가기<IoIosArrowForward /></a>
            </div>
            <div className="info-card">
              <h3>
                중개의뢰 관리요청 <span className="badge">2</span>
              </h3>
              <p>지인 또는 중개사가 관리 요청한 중개의뢰가 나타납니다.</p>
              <a href="#" className='link-arr'>관리 요청하기<IoIosArrowForward /></a>
            </div>
          </div>
        </section>
        <section className='section'>
          <MyPoint />
        </section>
        <section className="section">
          <Listing />
        </section>
        <section className="section">
          <AppLink />
        </section>
      </div>
    </div>
  )
}

export default MyPage