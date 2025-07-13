import Slider from "../form/Slider"

const FloorArea = ({setActiveBox}) => {
  return (
    <>
      <button className='btn-close'  onClick={() => setActiveBox(null)}><span className='blind'>닫기</span></button>
      <div className="filter-row">
        <div className='top-area'>
          <h3>전용면적</h3>
        </div>
        <Slider mid="182㎡(55평)" />
      </div>
    </>
  )
}

export default FloorArea