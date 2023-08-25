import "./FeatureList.scss";
import arrowDownBlue from "../../../Icons/ArrowBlue.svg";
import eatIcon from "../../../Icons/eatBlue.svg";
import video from "../../../Assets/explore-video.mp4";
import blueDrink from "../../../Icons/drinkBlue.svg";
import playIcon from "../../../Icons/happyBlue.svg";
import sleepIcon from "../../../Icons/BedBlue..svg";
import relax from "../../../Icons/happyBlue.svg";
import DiningGallery from "../DiningGallery/DiningGallery";
import ExcursionsGallery from "../../../Components/Header/ExcursionsGallery/ExcursionsGallery";
import { useState } from "react";

function FeatureList() {
  const [show, setShow] = useState(false);
  function galleryHandle() {
    setShow(!show);
  }
  const [excursion, setExcursion] = useState(false);
  function excursionHandle() {
    setExcursion(!excursion);
  }
  return (
    <>
      <div className="header-sect">
        <h2 className="title">About Destination</h2>

        <p className="text">
          Dive into Orange Bowl reef, indulge at Atlantis, shop in Paradise
          Island. Every taste, every style, experience it all on an overnight or
          week-long cruise. Bahamas magic awaits - cruise now!
        </p>
      </div>
      <div className="video-container">
        <video className="video" src={video} autoPlay loop muted></video>
      </div>

      <div className="Feature-div">
        <h2 className="title">UP TO $650 OFF</h2>
        <p className="description"> +30% OFF ALL CRUISES</p>
        <p className="description"> +KIDS SALES FREE</p>
        <button className="Feature-div__book-butt">BOOK NOW</button>
        <h2 className="title">What To expect</h2>
        <div className="Feature-div__section" onClick={galleryHandle}>
          <img className="Feature-div__eat-icon" src={eatIcon} alt="" />
          <p className="Feature-div__subtitle"> Eat </p>
          <img
            className="Feature-div__arrow-icon"
            src={arrowDownBlue}
            alt="arrow down"
          />
        </div>
        {show && <DiningGallery />}

        <div className="Feature-div__section">
          <img className="Feature-div__eat-icon" src={blueDrink} alt="" />
          <p className="Feature-div__subtitle"> Drink </p>
          <img
            className="Feature-div__arrow-icon"
            src={arrowDownBlue}
            alt="arrow down"
          />
        </div>
        <div className="Feature-div__section" onClick={excursionHandle}>
          <img className="Feature-div__eat-icon" src={playIcon} alt="" />
          <p className="Feature-div__subtitle"> Play </p>
          <img
            className="Feature-div__arrow-icon"
            src={arrowDownBlue}
            alt="arrow down"
          />
        </div>
        {excursion && <ExcursionsGallery />}
        <div className="Feature-div__section">
          <img className="Feature-div__eat-icon" src={sleepIcon} alt="" />
          <p className="Feature-div__subtitle"> Sleep </p>
          <img
            className="Feature-div__arrow-icon"
            src={arrowDownBlue}
            alt="arrow down"
          />
        </div>
        <div className="Feature-div__section">
          <img className="Feature-div__eat-icon" src={relax} alt="" />
          <p className="Feature-div__subtitle"> Relax </p>
          <img
            className="Feature-div__arrow-icon"
            src={arrowDownBlue}
            alt="arrow down"
          />
        </div>
        <div className="Feature-div__section">
          <img className="Feature-div__eat-icon" src={eatIcon} alt="" />
          <p className="Feature-div__subtitle"> Kid's Corner </p>
          <img
            className="Feature-div__arrow-icon"
            src={arrowDownBlue}
            alt="arrow down"
          />
        </div>
        <button className="Feature-div__book-butt">BOOK NOW</button>
      </div>
    </>
  );
}

export default FeatureList;
