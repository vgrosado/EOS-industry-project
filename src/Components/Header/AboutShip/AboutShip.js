import "./AboutShip.scss";
import cruise from "../../../Assets/Images/cruiseliberty.png";

function AboutShip() {
  return (
    <>
      <div className="about">
        <h2 className="about__title">About The Ship</h2>

        <img
          className="about__ship"
          src={cruise}
          alt="Cruise Liberty of the seas"
        />
        <div className="about__ship-info">
          <p className="about__intro"> GET TO KNOW</p>
          <p className="about__ship-name">LIBERTY OF THE SEAS ®</p>
          <p className="about__description">
            Liberty of the Seas® is loaded with cruise activities and slides
            that maximize the thrills. Like the adrenaline amping Tidal Wave℠,
            the first boomerang style slide at sea, and The Perfect Storm℠
            dueling water slides.{" "}
          </p>
          <div className="about__but-div">
            <button className="about__button"> DECK PLAN </button>
            <button className="about__button"> AMENITIES </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutShip;
