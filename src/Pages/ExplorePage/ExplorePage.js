import "../ExplorePage/ExplorePage.scss";
import AboutShip from "../../Components/Header/AboutShip/AboutShip";
import FeatureList from "../../Components/Header/FeatureList/FeatureList";
import Info from "../../Components/Header/Info/Info";

function ExplorePage() {
  return (
    <section className="explore">
      <div className="explore__div">
        <div className="explore__hero">
          <section className="explore__details">
            <div className="explore__header">
              <p className="explore__title">THIS IS YOUR</p>
              <h1 className="explore__text">
                4 Night Bahamas & Perfect Day Cruise
              </h1>
            </div>
            <div className="explore__subheader">
              <p className="explore__title">LEAVING FROM</p>
              <p className="explore__text">Fort Lauderdale, Florida</p>
            </div>
            <div className="explore__ship">
              <p className="explore__title">ONBOARD</p>
              <p className="explore__text">Liberty of the Seas</p>
            </div>
            <div className="explore__price">
              <p className="explore__title">FROM USD</p>
              <p className="explore__text">$293</p>
            </div>
            <div className="explore__date-div">
              <p className="explore__date">Sailing from Mon, Apr 08 2024</p>
              <p className="explore__date"> ( + 9 Additional Dates! )</p>
            </div>
          </section>
        </div>
      </div>
      <div className="second-section">
        <FeatureList />
        <AboutShip />
        <Info />
      </div>
    </section>
  );
}
export default ExplorePage;
