import { useEffect, useRef, useState } from 'react';
import './form.css'; 
import { RiResetRightLine } from "react-icons/ri";

const Slider = ({ min = "0", mid = "5억", max = "무제한" }) => {
  const [slider1, setSlider1] = useState(25);
  const [slider2, setSlider2] = useState(75);
  const trackRef = useRef(null);

  const updateTrack = () => {
    const minVal = Math.min(slider1, slider2);
    const maxVal = Math.max(slider1, slider2);
    if (trackRef.current) {
      trackRef.current.style.background = `linear-gradient(to right, #ddd ${minVal}%, #378cff ${minVal}%, #378cff ${maxVal}%, #ddd ${maxVal}%)`;
    }
  };

  useEffect(() => {
    updateTrack();
  }, [slider1, slider2]);

  const handleReset = () => {
    setSlider1(0);
    setSlider2(100);
  };

  return (
    <div className="slider-wrap">
      <div className="slider-container">
        <div className="slider-track" ref={trackRef}></div>
        <input
          type="range"
          min="0"
          max="100"
          value={slider1}
          onChange={(e) => setSlider1(Number(e.target.value))}
          className="slider"
        />
        <input
          type="range"
          min="0"
          max="100"
          value={slider2}
          onChange={(e) => setSlider2(Number(e.target.value))}
          className="slider"
        />
      </div>
      <div className="labels">
        <span>{min}</span>
        <span>{mid}</span>
        <span>{max}</span>
      </div>
      <div className="slider-footer">
        <span>{Math.min(slider1, slider2)} ~ {Math.max(slider1, slider2)}</span>
        <button className="reset-btn" onClick={handleReset}><RiResetRightLine /><span>초기화</span></button>
      </div>
    </div>
  );
};

export default Slider;