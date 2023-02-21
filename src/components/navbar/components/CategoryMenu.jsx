import React from "react";
import { Link } from "react-router-dom";

const CategoryMenu = () => {
  return (
    <div className="menu">
      <div className="container">
        <ul>
          <li>
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
          </li>

          <li>
            <Link className="link" to="/">
              Digital Marketing
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              Writing & Translation
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              Video & Animation
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              Music & Audio
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              Programming & Tech
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              Business
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              Lifestyle
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              AI Services <span className="menu-new">New</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryMenu;
