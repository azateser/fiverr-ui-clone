import React from "react";
import Featured from "../../components/Home/featured/Featured";
import Slide from "../../components/slide/Slide";
import TrustedBy from "../../components/Home/trustedBy/TrustedBy";
import "./Home.scss";

import { cards, projects } from "../../data";
import CatCard from "../../components/Home/catCard/CatCard";
import Fingertips from "../../components/Home/Fingertips/Fingertips";
import Marketplace from "../../components/Home/Marketplace/Marketplace";
import Business from "../../components/Home/Business/Business";
import ProjectCard from "../../components/Home/projectCard/ProjectCard";

const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
      <Slide title="Popular professional services" slidesToShow={5} arrowsScroll={4}>
        {cards.map((card) => (
          <CatCard item={card} key={card.id} />
        ))}
      </Slide>
      <Fingertips />
      <Marketplace />
      <Business />
      <Slide projects title="Get inspired with projects made by our freelancers" slidesToShow={4} arrowsScroll={3}>
        {projects.map((project) => (
          <ProjectCard item={project} key={project.id} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
