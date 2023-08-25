import React from "react";
import "./DiningGallery.scss";
import xbut from "../../../Icons/x-button.svg";
import windjamer from "../../../Assets/Windjammer.png";
import noodle from "../../../Assets/Noodle bar.png";
import pizza from "../../../Assets/sorrento.png";
import coastal from "../../../Assets/coastal.png";
import chef from "../../../Assets/chefs table.png";
import chop from "../../../Assets/Chop.png";

function DiningGallery() {
  return (
    // <Modal isOpen={true} onClose={onClose}>
    <div>
      <div className="header-div">
        <p className="gallery-title">Dining Options</p>
        <div className="back-div">
          <img className="back-button" src={xbut} alt="X close Icon" />
        </div>
      </div>

      <p className="galery-description">
        Enjoy a wide range of dining options to satisfy every craving and
        occasion, from casual bites to elevated dinner and cocktail spots.
      </p>
      <div className="gallery-section">
        <div className="gallery-item">
          <img src={windjamer} alt="Image 1" />
          <p className="item-description"> Windjammer</p>
        </div>
        <div className="gallery-item">
          <img src={noodle} alt="Noodles" />
          <p className="item-description">Noodle Bar</p>
        </div>
        <div className="gallery-item">
          <img src={pizza} alt="Pizza " />
          <p className="item-description">Sorrento's Pizza</p>
        </div>
        <div className="gallery-item">
          <img src={coastal} alt="Image 4" />
          <p className="item-description">Coastal Kitchen</p>
        </div>
        <div className="gallery-item">
          <img src={chef} alt="Image 4" />
          <div className="description-div">
            <p className="item-description">Chef's Table</p>
            {/* <p className="little-description"> Add-on </p> */}
          </div>
        </div>
        <div className="gallery-item">
          <img src={chop} alt="Image 4" />
          <div className="description-div">
            <p className="item-description">Chop's Grille</p>
            {/* <p className="little-description"> Add-on </p> */}
          </div>
        </div>
        <p className="browse"> Browse All Onboard Dining</p>
      </div>
    </div>
    // </Modal>
  );
}

export default DiningGallery;
