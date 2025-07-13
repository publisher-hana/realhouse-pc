import Slider from "../form/Slider"

export const Price = ({setActiveBox}) => {
  return (
    <>
      <button className='btn-close'  onClick={() => setActiveBox(null)}><span className='blind'>닫기</span></button>
      <div className="filter-row">
        <div className='top-area'>
          <h3>매매금액</h3>
        </div>
        <Slider />
      </div>
       <div className="filter-row">
        <div className='top-area'>
          <h3>관리비</h3>
        </div>
        <Slider mid = "20만원"/>
      </div>
    </>
  )
}
