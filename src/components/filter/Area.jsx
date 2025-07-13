import { useState } from "react";
 const cities = [
    "서울시", "부산시", "대구시", "인천시", "광주시", "대전시", "울산시", "세종시"
  ];
  const area1 = [
    "강남구", "양천구", "도봉구", "노원구"
  ];
  const area2 = [
    "노산대로", "노해로길", "압구정로", "율곡로", "율곡로","율곡로"
  ];
const Area = ({ setActiveBox }) => {
   const [activeTab, setActiveTab] = useState("city"); // 초기값은 'city'
   const [selectedItems, setSelectedItems] = useState([]);
   const getActiveItems = () => {
    switch (activeTab) {
      case "city":
        return cities;
      case "area1":
        return area1;
      case "area2":
        return area2;
      default:
        return [];
    }
  };
  const toggleItem = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };
  return (
    <>
      <button className='btn-close'  onClick={() => setActiveBox(null)}><span className='blind'>닫기</span></button>
      <div className='top-area'>
        <h3>지역</h3>
        <div className="select-wrap">
          <button
            className={`btn ${activeTab === "city" ? "selected" : ""}`}
            onClick={() => setActiveTab("city")}
          >
            서울시<i className="icon-down"></i>
          </button>
          <button
            className={`btn ${activeTab === "area1" ? "selected" : ""}`}
            onClick={() => setActiveTab("area1")}
          >
            시군구<i className="icon-down"></i>
          </button>
          <button
            className={`btn ${activeTab === "area2" ? "selected" : ""}`}
            onClick={() => setActiveTab("area2")}
          >
            읍면동<i className="icon-down"></i>
          </button>
        </div>
      </div>

      <div className="filter-cont">
        {getActiveItems().map((item, idx) => (
          <button
            key={idx}
            className={`btn sticky ${selectedItems.includes(item) ? "selected" : ""}`}
            onClick={() => toggleItem(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
};


export default Area