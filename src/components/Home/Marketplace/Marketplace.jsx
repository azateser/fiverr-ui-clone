import React from "react";
import { Link } from "react-router-dom";
import "./Marketplace.scss";

import { marketplace } from "../../../data";

const Marketplace = () => {
  return (
    <div className="marketplace">
      <div className="container">
        <h2>Explore the marketplace</h2>
        <ul className="categories-list">
          {marketplace.map((category) => (
            <li key={category.id}>
              <Link to="/cattegory">
                <img src={category.img} alt={category.title} />
                {category.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Marketplace;
