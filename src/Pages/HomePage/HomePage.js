import "../HomePage/HomePage.scss";
import heroVid from "../../Assets/Video/AdventureoftheSeas2023CruiseShipTour.Mp4";
import Activities from "../../Components/Activities/Activities";
import { useNavigate } from "react-router-dom";
import Footer from "../../Assets/Images/FOOTER (1).png";
import SignupForm from "../../Components/SignupForm/SignupForm";

function HomePage() {
  let navigateTo = useNavigate();

  function handleNavigate() {
    navigateTo("/ExplorePage");
  }
  return (
    <section>
      <div className="hero">
        <video
          className="hero__video"
          autoPlay
          loop
          muted
          src={heroVid}
        ></video>
      </div>
      <main className="booking">
        <div className="booking__card">
          <h1 className="booking__heading">FIND A CRUISE </h1>
          <div className="booking__details">
            <select className="booking__destination">
              <option value="" disabled selected hidden>
                Sail To
              </option>
              <option>Alaska</option>
              <option>Arabia Gulf</option>
              <option>Asia</option>
              <option>Australia & New Zealand</option>
              <option>Bahamas</option>
              <option>Bermuda</option>
              <option>Canada & New England</option>
              <option>Caribbean</option>
            </select>
            <select className="booking__port">
              <option value="" disabled selected hidden>
                Depart From
              </option>
              <option></option>
              <option>Baltimore, Maryland</option>
              <option>Boston, Massachusetts</option>
              <option>Cape Liberty (New York), New Jersey</option>
              <option>Fort Lauderdale, Florida</option>
              <option>Galveston, Texas</option>
              <option>Los Angeles, California</option>
              <option>Miami, Florida</option>
              <option>Montreal, Quebec</option>
            </select>
            <input className="booking__date" type="date" min="" max="" />
          </div>
          <button onClick={handleNavigate} className="booking__button">
            SEARCH CRUISES
          </button>
        </div>
      </main>
      <Activities />
      <SignupForm/>
      <img src={Footer} alt="footer" className="footer" />
    </section>
  );
}

export default HomePage;
