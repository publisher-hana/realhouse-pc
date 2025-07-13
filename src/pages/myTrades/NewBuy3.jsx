import { useEffect } from "react";
import AgenIntro from "../../components/agent/AgenIntro"
import AgentReview from "../../components/agent/AgentReview"
import AgentScore from "../../components/agent/AgentScore"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import AgentSide from "../../components/pageAside/AgentSide";

const NewBuy3 = () => {
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
        <div className="scroll-container inquiry-step">
          <div className="left-layout">
            <div className="step-title-wrap">
              <h2 className="step-title">매수/임차 중개의뢰</h2>
              <div className="step-indicator">
                <span className="step-number">1</span>
                <span className="step-number">2</span>
                <span className="step-number active">3</span>
                <span className="step-label">중개사 선택</span>
              </div>
            </div>
            <section className="section">
              <AgenIntro />
            </section>
            <section className="section">
              <AgentScore />
            </section>
            <section className="section">
              <AgentReview />
              <ul className="pagination">
                <li className="arrow"><IoIosArrowBack size={20}/></li>
                <li className="page active">1</li>
                <li className="page">2</li>
                <li className="page">3</li>
                <li className="page">4</li>
                <li className="arrow"><IoIosArrowForward /></li>
              </ul>
            </section>
            <div className='btn-area'>
              <Link to="/myBuy/newBuy2" className="btn btn-prev"><IoIosArrowBack size={16}/>이전</Link>
              <Link to="/myBuy/newBuy4" className="btn btn-next">다음 <IoIosArrowForward size={16}/></Link>
            </div>
          </div>
        </div>
        <AgentSide />
      </div>
    </>
  )
}

export default NewBuy3