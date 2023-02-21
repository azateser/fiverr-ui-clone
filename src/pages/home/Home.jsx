import React from "react";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import "./Home.scss";

import { cards } from "../../data";
import CatCard from "../../components/catCard/CatCard";
import Fingertips from "../../components/Home/Fingertips/Fingertips";
import Marketplace from "../../components/Home/Marketplace/Marketplace";
import Business from "../../components/Home/Business/Business";

const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={4}>
        {cards.map((card) => (
          <CatCard item={card} key={card.id} />
        ))}
      </Slide>
      <Fingertips />
      <Marketplace />
      <Business />
    </div>
  );
};

export default Home;
