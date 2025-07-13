import { useState } from 'react';
import { RiResetRightLine } from 'react-icons/ri';
const filterCategories = {
  방구조: ['전체', '원룸(개방형)', '원룸(분리형)', '2룸', '3룸', '4룸', '5룸이상', '복층'],
  총구분: ['전체', '1층', '2층', '3~5층', '6~10층', '6~11층 이상', '반지하', '옥탑'],
  건축연도: ['전체', '~1년', '1년~3년', '3~5년', '5~10년', '10~20년', '20~30년', '30년 이상'],
  옵션: ['급매', '세안고', '엘리베이터', '주차', '반려동물', '전세자금대출'],
};

const facilityList = [
  '에어컨', '냉장고', '세탁기', '가스레인지', '인덕션', '싱크대',
  '침대', '책상', '옷장', 'TV', '신발장', '전자도어락',
];
export const FilterSec = ({setActiveBox}) => {
   const [checked, setChecked] = useState({});
  const [activeFacilities, setActiveFacilities] = useState(['에어컨']);

  const toggleCheckbox = (category, option) => {
    setChecked((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [option]: !prev?.[category]?.[option],
      },
    }));
  };
  const toggleFacility = (item) => {
    setActiveFacilities((prev) =>
      prev.includes(item) ? prev.filter((v) => v !== item) : [...prev, item]
    );
  };

  const resetAll = () => {
    setChecked({});
    setActiveFacilities([]);
  };
  return (
    <>
      <div className="filter-section">
        <button className='btn-close'  onClick={() => setActiveBox(null)}><span className='blind'>닫기</span></button>
        <div className="filter-wrapper">
          {Object.entries(filterCategories).map(([title, options]) => (
              <div class="filter-group">
                <div class="filter-group-title">{title}</div>
                {options.map((option) => (
                  <div className="checkbox-item" key={option}>
                    <input
                      type="checkbox"
                      id={`${title}-${option}`}
                      checked={!!checked?.[title]?.[option]}
                      onChange={() => toggleCheckbox(title, option)}
                    />
                    <label htmlFor={`${title}-${option}`}>{option}</label>
                  </div>
                ))}
              </div>
          ))}
        </div>
        <div className="facility-box">
          <div class="filter-group-title">내부 시설 옵션</div>
           <div className="options">
            {facilityList.map((item) => (
              <button
                key={item}
                className={`option-btn ${activeFacilities.includes(item) ? 'active' : ''}`}
                onClick={() => toggleFacility(item)}
              >
                {item}
              </button>
              
            ))}
           </div>
        </div>
        <div className='filter-footer'>
          <button className="reset-btn"><RiResetRightLine /><span>초기화</span></button>
        </div>
      </div>
    </>
  )
}
