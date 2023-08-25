import React from "react";
import "./ExcursionGallery.scss";
import mini from "../../../Assets/mini golf.png";
import ice from "../../../Assets/ice skating.png";
import broadway from "../../../Assets/broadway.png";
import movies from "../../../Assets/movie night.png";
import spa from "../../../Assets/Spa.png";
import snorkle from "../../../Assets/Snorkle.png";
import xbut from "../../../Icons/x-button.svg";

function ExcursionGallery() {
  return (
    <div>
      <div className="header-div">
        <p className="gallery-title">Entertainment & Excursions</p>
        <div className="back-div">
          <img className="back-button" src={xbut} alt="X close Icon" />
        </div>
      </div>

      <p className="galery-description">
        Royal Caribbean offers everything from karaoke to on-shore adventures in
        exotic destinations.
      </p>
      <div className="gallery-section">
        <div className="gallery-item">
          <img src={mini} alt="Image 1" />
          <p className="item-description"> Mini Golf</p>
        </div>
        <div className="gallery-item">
          <img src={ice} alt="Noodles" />
          <p className="item-description">Ice Skating Shows</p>
        </div>
        <div className="gallery-item">
          <img src={broadway} alt="Pizza " />
          <p className="item-description">Broadway Shows</p>
        </div>
        <div className="gallery-item">
          <img src={movies} alt="Image 4" />
          <p className="item-description">Outdoor Movies</p>
        </div>
        <div className="gallery-item">
          <img src={spa} alt="Image 4" />
          <div className="description-div">
            <p className="item-description">Spa</p>
            {/* <p className="little-description"> Add-on </p> */}
          </div>
        </div>
        <div className="gallery-item">
          <img src={snorkle} alt="Image 4" />
          <div className="description-div">
            <p className="item-description">Snorkle</p>
            {/* <p className="little-description"> Add-on </p> */}
          </div>
        </div>
      </div>
      <p className="browse"> Browse All Onboard Dining</p>
    </div>
  );
}

export default ExcursionGallery;
