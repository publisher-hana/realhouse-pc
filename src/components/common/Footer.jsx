import './commonlayout.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <strong className="company">(주)아이비소프트</strong>
        <ul className='footer-list'>
          <li>고객센터 02.427.7088 (고객지원 시간 09:00~18:00, 토요일, 일요일, 공휴일 휴무)</li>
          <li><address>서울시 강동구 양재대로 1334(성내동 429-3) 동부빌딩 406호</address> <span>사업자등록번호: 212-26-83050</span></li>
        </ul>
        <div className='copy'>Ibsoft, Inc. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer