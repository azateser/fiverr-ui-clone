import React from "react";

import "./NotFound.scss";

const NotFound = () => {
  return (
    <div className="NotFound">
      <header className="header">
        <svg width="89" height="27" viewBox="0 0 89 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g fill="#ffffff">
            <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
          </g>
          <g fill="#1dbf73">
            <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
          </g>
        </svg>
      </header>
      <main className="main">
        <h3>Well, this isn&apos;t what you were looking for</h3>
        <svg className="seperator" width="55" height="3" viewBox="0 0 55 3" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="1.5" x2="55" y2="1.5" stroke="#FAFAFA" strokeWidth="3"></line>
        </svg>
        <div className="subtitle">
          <h5>But at least it&apos;s pretty</h5>
          <p>Keep exploring</p>
        </div>
        <div className="form">
          <input type="text" placeholder="Search for..." />
          <button>
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
              <path d="m15.89 14.653-3.793-3.794a.37.37 0 0 0-.266-.109h-.412A6.499 6.499 0 0 0 6.5 0C2.91 0 0 2.91 0 6.5a6.499 6.499 0 0 0 10.75 4.919v.412c0 .1.04.194.11.266l3.793 3.794a.375.375 0 0 0 .531 0l.707-.707a.375.375 0 0 0 0-.53ZM6.5 11.5c-2.763 0-5-2.238-5-5 0-2.763 2.237-5 5-5 2.762 0 5 2.237 5 5 0 2.762-2.238 5-5 5Z"></path>
            </svg>
          </button>
        </div>
        <div className="popular-categories">
          <p>Popular:</p>
          <ul>
            <li>Website Design</li>
            <li>Wordpress</li>
            <li>Logo Design</li>
            <li>Voiceover</li>
          </ul>
        </div>
      </main>
      <footer className="footer-404">
        <span>made on</span> <b>fiverr.</b> <span>@brokoola</span>
      </footer>
    </div>
  );
};

export default NotFound;
