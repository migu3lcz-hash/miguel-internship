import React from "react";
import HotCollectionsSlider from "./HotCollectionsSlider";

const HotCollections = ({ users }) => {
  return (
    <section id="section-collections" className="no-bottom" data-aos="fade-in" data-aos-offset="300">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <HotCollectionsSlider users={users}/>
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
