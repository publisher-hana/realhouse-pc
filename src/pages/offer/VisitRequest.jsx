import { useEffect } from "react";
import ReqAside from "../../offer/ReqAside";

export const VisitRequest = () => {
  useEffect(() => {
    // 클래스 추가
    document.body.classList.add("no-scroll");

    // 컴포넌트 언마운트 시 클래스 제거
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);
  return (
    <>
      <div className='container-wrap'>
        <div className="left-area">

        </div>
        <ReqAside />
      </div>
    </>
  )
}
