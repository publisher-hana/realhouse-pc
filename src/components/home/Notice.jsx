import './home.css'

const Notice = () => {
  return (
    <div className="notice-news-section">
       <div className="card">
        <div className="card-header">
          <h2>공지사항</h2>
          <a href="#" className="more">더보기</a>
        </div>
        <ul className="item-list">
          <li>
            <a href='#'className="link"><span className='text'>공지사항이 나타납니다.공지사항이 나타납니다공지사항이 나타납니다공지사항이 나타납니다</span><span className="badge new">NEW</span></a>
            <span className="date">23.03.10</span>
          </li>
          <li>
            <a href='#'className="link"><span className='text'>공지사항이 나타납니다.</span><span className="badge new">NEW</span></a>
            <span className="date">23.03.10</span>
          </li>
          <li>
            <a href='#'className="link"><span className='text'>공지사항이 나타납니다.</span></a>
            <span className="date">23.03.10</span>
          </li>
        </ul>
      </div>
      <div className="card">
        <div className="card-header">
          <h2>뉴스</h2>
          <a href="#" className="more">더보기</a>
        </div>
        <ul className="item-list">
          <ul className="item-list">
          <li>
            <a href='#'className="link"><span className='text'>뉴스가 나타납니다.</span><span className="badge new">NEW</span></a>
            <span className="date">23.03.10</span>
          </li>
          <li>
            <a href='#'className="link"><span className='text'>뉴스가 나타납니다.</span></a>
            <span className="date">23.03.10</span>
          </li>
          <li>
            <a href='#'className="link"><span className='text'>뉴스가 나타납니다.</span></a>
            <span className="date">23.03.10</span>
          </li>
        </ul>
        </ul>
      </div>
    </div>
  )
}

export default Notice