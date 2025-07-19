import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import FilterSelect from "../../components/trade/FilterSelect "
import InquiryCard from "../../components/trade/Inquirycard"
import TabMenu from "../../components/trade/TabMenu"
import TradeHeader from "../../components/trade/TradeHeader"
import { useState } from "react"

const MySell = () => {
   const [activeTab, setActiveTab] = useState("진행중");
    const [selectedFilters, setSelectedFilters] = useState({});
  
    const handleTabChange = (label) => {
      setActiveTab(label);
    };
    const handleFilterChange = (label, value) => {
      setSelectedFilters((prev) => ({
        ...prev,
        [label]: value,
      }));
    };
  return (
    <>
      <div className='container-wrap'>
        <div className="container">
          <TradeHeader 
             type="sell"
              title="나의매도"
              subtitle="매물을 중개의뢰하시면 보다 빠르게 계약하실 수 있습니다."
              buttonText="신규 중개의뢰"
              linkUrl="/mySell/newSell1"
              btnClass="btn-blue"
          />
         <section className="inquiry-status">
            <div className='inquiry-status-header'>
              <TabMenu
                tabs={[
                  { label: "진행중", count: 2 },
                  { label: "계약/종료", count: 3 },
                ]}
                activeTab={activeTab}
                onTabChange={handleTabChange}
              />
              <FilterSelect
                filters={[
                  { label: "거래구분 선택", options: ["매매", "전세", "월세"] },
                  { label: "매물유형 선택", options: ["아파트", "빌라"] }
                ]}
                selectedValues={selectedFilters}
                onChange={handleFilterChange}
              />
            </div>
            <ul>
              <InquiryCard
                type="sell"
                agentName="홍길동(은성공인중개사사무소)"
                status="의뢰종료" 
                dealType="전세"
                propertyType="아파트"
                address="서울시 송파구 잠실동 321(잠실주공1단지) 102동 103호"
                contractDate="23.10.09 13:20" // optional
                stats={{ 
                  customer: 0, 
                  agent: 0, 
                  request: 3, 
                  complete: 2 
                }}
                disabled={true}
              />
              <InquiryCard
                type="sell"
                agentName="홍길동(은성공인중개사사무소)"
                status="계약완료" 
                statusClassName="bg-green"
                dealType="전세"
                propertyType="아파트"
                address="서울시 송파구 잠실동 321(잠실주공1단지) 102동 103호"
                contractDate="23.10.09 13:20" // optional
                stats={{ 
                  customer: 0, 
                  agent: 0, 
                  request: 3, 
                  complete: 2 
                }}
                disabled={true}
              />
            </ul>
            <ul className="pagination">
              <li className="arrow"><IoIosArrowBack size={20}/></li>
              <li className="page active">1</li>
              <li className="page">2</li>
              <li className="page">3</li>
              <li className="page">4</li>
              <li className="arrow"><IoIosArrowForward /></li>
            </ul>
          </section>
        </div>
      </div>
    </>
  )
}

export default MySell