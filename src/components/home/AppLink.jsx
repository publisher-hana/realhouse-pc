import { BsDownload } from "react-icons/bs";
export const AppLink = () => {
  return (
    <div className="app-download_wrap">
      <div className="app-download">
        <div className="left">
          <BsDownload size={36}/>
          <p><strong>앱을 다운로드하세요</strong></p>
        </div>
        <div className="right">
          <input type="text" placeholder="휴대폰번호 입력" />
          <button>앱 링크 전송</button>
        </div>
      </div>
    </div>
  )
}
