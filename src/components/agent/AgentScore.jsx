const AgentScore = () => {
  return (
    <>
      <div className="score-summary">
        <div className="total-score">평점 <span className="score">1,000점</span></div>
        <div className="score-breakdown">
          <span>고객평점 <span className="score">600점</span></span>
          <span>시스템평점 <span className="score">400점</span></span>
        </div>
      </div>
    </>
  )
}

export default AgentScore