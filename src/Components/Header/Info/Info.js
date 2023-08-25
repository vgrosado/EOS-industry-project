import "./Info.scss";
import review from "../../../Assets/reviews.png";
import affirm from "../../../Assets/affirm.PNG";

function Info() {
  return (
    <>
      <div className="info">
        <h2 className="info__title">THINGS TO KNOW: </h2>
        <p className="info__subtitle">Would I get motion sickness?</p>
        <p className="info__description">
          • Most large cruise ships are built with stabilizers to make the ride
          as smooth as possible.
        </p>
        <p className="info__subtitle">
          What are my options for child care on-board?
        </p>
        <p className="info__description">
          • On board child care with trained professionals is available at $6-$8
          per hour.
        </p>
        <p className="info__button">FAQ's</p>
        <button className="info__book-butt">BOOK NOW</button>
        <div className="info__div">
          <img
            className="info__review"
            src={review}
            alt="Cruise Liberty of the seas"
          />
          <img
            className="info__affirm"
            src={affirm}
            alt="Cruise Liberty of the seas"
          />
        </div>
      </div>
    </>
  );
}

export default Info;
