import React from 'react';
import './Slider.css'; // Ensure the CSS file is imported

const Slider = () => {
  const sliderData1 = [
    'birdseye.svg',
    'break.svg',
    'keddar.svg',
    'shield.svg',
    'tandov.svg',
    'tree.svg',
    'µ.svg',
    'tradingview.svg'
  ];

  return (
    <div className="tot">
      <main>
        <div
          className="slider"
          style={{ '--width': '400px', '--height': '200px', '--quantity': '8'}}
        >
          <div className="list">
            {sliderData1.map((img, index) => (
              <div className="item" style={{ '--position': index + 1 }} key={index}>
                <img src={`/src/components/Slider/images/${img}`} alt="" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Slider;
