import { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { Link } from "react-router-dom";
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

const Aside = () => {
   const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  return (
    <aside className="property-list-wrapper">
        <div className="list-header">
          <strong className="total-count">전체매물 · 21</strong>
        </div>
        <div className="list-scroll">
          <ul className="property-list">
            {mockListings.map((item) => (
              <li key={item.id}  className="property-card">
                 <Link to={`/detail/${item.id}`} className="card-link">
                  <img src={item.image} alt="매물 이미지" className="thumb" />
                  <div className="info">
                    <strong className="price">{item.title}</strong>
                    <p className="summary">{item.summary}</p>
                    <div className="tags">
                      {item.tags.map((tag, i) => (
                        <span key={i} className={`tag ${i === 0 ? "orange" : "gray"}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="address">{item.address}</p>
                  </div>
                </Link>
                <button
                    className={`favorite ${favorites.includes(item.id) ? "on" : ""}`}
                    onClick={() => toggleFavorite(item.id)}
                    aria-label="찜하기"
                  >
                    {favorites.includes(item.id) ? (
                      <IoMdHeart size={24} color="red" />
                    ) : (
                      <IoIosHeartEmpty size={24} />
                    )}
                  </button>
              </li>
            ))}
          </ul>
        </div>
    </aside>
  )
}

export default Aside