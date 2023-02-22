import React, { useEffect, useState } from "react";
import "./Featured.scss";

const Featured = () => {
  const [slider, setSlider] = useState("dog");

  const sliderImages = ["dog", "woman2", "man2", "woman", "man", "woman3"];

  useEffect(() => {
    let total = sliderImages.length;
    let current = 0;
    setInterval(() => {
      current = current === total - 1 ? 0 : current + 1;
      setSlider(sliderImages[current]);
    }, 8000);
  }, []);

  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <i>freelance</i> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#94979c">
                <path d="m15.89 14.653-3.793-3.794a.37.37 0 0 0-.266-.109h-.412A6.499 6.499 0 0 0 6.5 0C2.91 0 0 2.91 0 6.5a6.499 6.499 0 0 0 10.75 4.919v.412c0 .1.04.194.11.266l3.793 3.794a.375.375 0 0 0 .531 0l.707-.707a.375.375 0 0 0 0-.53ZM6.5 11.5c-2.763 0-5-2.238-5-5 0-2.763 2.237-5 5-5 2.762 0 5 2.237 5 5 0 2.762-2.238 5-5 5Z"></path>
              </svg>
              <input type="text" placeholder='Try "building mobile app"' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Website Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="slider">
          <div className={`slider-item fadeIn item-${slider}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
