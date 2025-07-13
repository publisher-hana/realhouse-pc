import './agent.css'
const AgenIntro = () => {
  return (
    <div className="agent-card">
      <div className="agent-profile">
        <img src="/realhouse-pc/images/img_agent.png" alt="중개사 사진" className="agent-photo" />
      </div>
      <div className="agent-info">
        <p><span className="label">중개사</span> 홍길동 <span className="note">(대표공인중개사)</span></p>
        <p><span className="label">중개사무소</span> 중개법인잠실은성공인사사무소</p>
        <p><span className="label">주소</span> 서울시 송파구 잠실동 321-1(대성빌딩) 301호</p>
      </div>
    </div>
  )
}

export default AgenIntro