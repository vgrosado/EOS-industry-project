import "./Activities.scss";
import activitiesimg from "../../Assets/Images/activities.png";
import activitiesimg2 from "../../Assets/Images/activitiesimg2.png";
import activitiesimg3 from "../../Assets/Images/activitiesimg3.png";

function Activities() {
  return (
    <>
      <h2 className="activities-title">WHY ROYAL?</h2>
      <p className="activities-subtitle">TAILORED FOR ALL</p>
      <img src={activitiesimg} alt="Activities" className="activities-img" />
      <p className="activities-paragraph">
        Discover stunning travel spots. Encounter island relaxation, explore
        pristine beaches, trek through lush rainforests, and snorkel vibrant
        reefs on a family friendly cruise.
      </p>
      <p className="activities-paragraph2">Endless Activities Await</p>
      <img src={activitiesimg2} alt="Activities2" className="activities-img2" />
      <p className="activities-paragraph">
        From water parks to rock climbing, Royal Caribbean cruises offer endless
        fun. Zipline, skydiving, SkyPad, and more await aboard. Every day is a
        new adventure, all included!
      </p>
      <p className="activities-paragraph3">Unique, Innovative Experiences</p>
      <img src={activitiesimg3} alt="Activities3" className="activities-img3" />
      <p className="activities-paragraph4">
        Royal Caribbean redefines cruise possibilities through a culture of
        relentless innovation, from maritime architecture and technology to
        futuristic guest experiences.
      </p>
      <button className="activities-button">LEARN MORE</button>
    </>
  );
}

export default Activities;
