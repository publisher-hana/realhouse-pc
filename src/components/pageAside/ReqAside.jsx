import { useState } from "react";
import './aside.css'

const mockListings = [
  {
    id: 1,
    title: "매매 7억 5000",
    summary: "3룸 | 3층 | 82㎡(25)/100㎡(33)",
    address: "잠실주공1단지 104동잠실",
    tags: ["아파트", "욕실수리", "도배"],
    image: "/realhouse-pc/images/offering_img1.jpg",
  },
  {
    id: 2,
    title: "매매 6억 5000",
    summary: "3룸 | 3층 | 82㎡(25)/100㎡(33)",
    address: "잠실주공1단지 104동잠실",
    tags: ["아파트", "욕실수리", "도배"],
    image: "/realhouse-pc/images/offering_img2.jpg",
  },
  {
    id: 3,
    title: "매매 4억",
    summary: "2룸 | 1층 | 82㎡(25)/100㎡(33)",
    address: "잠실주공1단지 104동잠실",
    tags: ["빌라", "욕실수리", "도배"],
    image: "/realhouse-pc/images/offering_img3.jpg",
  },
  {
    id: 4,
    title: "매매 4억",
    summary: "2룸 | 1층 | 82㎡(25)/100㎡(33)",
    address: "잠실주공1단지 104동잠실",
    tags: ["빌라", "욕실수리", "도배"],
    image: "/realhouse-pc/images/offering_img3.jpg",
  },
  {
    id: 5,
    title: "매매 4억",
    summary: "2룸 | 1층 | 82㎡(25)/100㎡(33)",
    address: "잠실주공1단지 104동잠실",
    tags: ["빌라", "욕실수리", "도배"],
    image: "/realhouse-pc/images/offering_img3.jpg",
  },
];

const ReqAside = () => {
   const [visited, setVisited] = useState([]);
  const toggleVisit = (id) => {
    setVisited((prev) =>
    prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
  );
};
  return (
    <aside className="aside-scroll-wrapper nav-h req-type">
        <div className="list-header">
          <div className="row-top">
            <div className="button-area">
              <button>요청 전송</button>
              <p>※ 방문하고 싶은 매물을 모두 선택 후, [요청 전송]을 누르십시오.</p>
            </div>
          </div>
          <div className="row-bottom title-area">
            <strong className="total-count">전체매물 · 4/5 </strong>
            <span className="desc">(방문요청 가능매물/전체 추천매물)</span>
          </div>
        </div>
        <div className="list-scroll">
           <ul className="property-list">
          {mockListings.map((item) => {
            const inputId = `visit-${item.id}`; // ✅ 고유 ID 지정
            return (
              <li key={item.id} className="property-card">
                <div className="card-inner">
                  <img src={item.image} alt="매물 이미지" className="thumb" />
                  <div className="info">
                    <strong className="price">{item.title}</strong>
                    <p className="summary">{item.summary}</p>
                    <div className="tags">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className={`tag ${i === 0 ? "orange" : "gray"}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="address">{item.address}</p>
                  </div>
                </div>

                <div className="visit-checkbox">
                  <div className="checkbox-item">
                    <input
                      type="checkbox"
                      id={inputId}
                      checked={visited.includes(item.id)}
                      onChange={() => toggleVisit(item.id)}
                    />
                    <label htmlFor={inputId}>방문요청</label>
                  </div>
                  <span className="date">23.08.10</span>
                </div>
              </li>
            );
          })}
        </ul>
        </div>
    </aside>
  )
}

export default ReqAside