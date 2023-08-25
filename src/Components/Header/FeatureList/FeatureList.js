import "./FeatureList.scss";
import arrowDownBlue from "../../../Icons/ArrowBlue.svg";
import eatIcon from "../../../Icons/eatBlue.svg";
import video from "../../../Assets/explore-video.MP4";

function FeatureList() {
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

      <h2 className="title">What To expect</h2>
      <div className="Feature-div">
        <div className="Feature-div__section">
          <img className="Feature-div__eat-icon" src={eatIcon} alt="" />
          <p className="Feature-div__subtitle"> Eat </p>
          <img
            className="Feature-div__arrow-icon"
            src={arrowDownBlue}
            alt="arrow down"
          />
        </div>

        {/* <div className="Feature-div__section">
          <img
            className="Feature-div__drink-icon"
            src={}
            alt=""
          />
            <p className="Feature-div__feature">Drink</p>
            <img
            className="Feature-div__arrow-icon"
            src={}
            alt=""
          />
        </div>
        <div className="Feature-div__section">
          <img
            className="Feature-div__play-icon"
            src={}
            alt=""
          />
            <p className="Feature-div__feature">Play</p>
            <img
            className="Feature-div__arrow-icon"
            src={}
            alt=""
          />
        </div>
      
        <div className="Feature-div__section">
          <img
            className="Feature-div__sleep-icon"
            src={}
            alt=""
          />
            <p className="Feature-div__feature">Sleep</p>
            <img
            className="Feature-div__arrow-icon"
            src={}
            alt=""
          />
        </div>
        
        <div className="Feature-div__section">
          <img
            className="Feature-div__relax-icon"
            src={}
            alt=""
          />
            <p className="Feature-div__feature">Relax</p>
            <img
            className="Feature-div__arrow-icon"
            src={}
            alt=""
          />
        </div>
        
        <div className="Feature-div__section">
          <img
            className="Feature-div__kids-icon"
            src={}
            alt=""
          />
            <p className="Feature-div__feature">Kid's Corner</p>
            <img
            className="Feature-div__arrow-icon"
            src={}
            alt=""
          />
        </div> */}
        <button className="Feature-div__book-butt">Shop Now</button>
      </div>
    </>
  );
}

export default FeatureList;
