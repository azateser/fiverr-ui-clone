import React from "react";

import "./Slide.scss";

import Slider from "infinite-react-carousel";

const Slide = ({ children, slidesToShow, arrowsScroll, title, projects }) => {
  return (
    <div className={projects ? "slide projects" : "slide"}>
      <div className="container">
        <div className="title">
          <h2>{title}</h2>
          {projects && (
            <span>
              See More Projects
              <svg width="8" height="16" viewBox="0 0 8 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z"></path>
              </svg>
            </span>
          )}
        </div>
        <div className="slide-content">
          <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
            {children}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Slide;
