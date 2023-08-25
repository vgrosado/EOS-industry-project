import '../HomePage/HomePage.scss'
import heroVid from '../../Assets/Video/AdventureoftheSeas2023CruiseShipTour.Mp4'


function HomePage() {

    return (
       <section>
            <div className='hero'>
                <video className='hero__video' autoPlay loop muted src={heroVid}></video>
            </div>
            <main className='booking'>
                <div className='booking__card'>
                <h1>Find A Cruise!</h1>
                    <div className='booking__details'>
                    <label className='booking__label'>Destination</label>
                        <select className='booking__destination'>
                            <option></option>
                            <option></option>
                            <option></option>
                            <option></option>
                            <option></option>
                            <option></option>
                            <option></option>
                        </select>
                        <label className='booking__label'>Departure Port</label>
                        <select className='booking__port'>
                        <option></option>
                            <option></option>
                            <option></option>
                            <option></option>
                            <option></option>
                            <option></option>
                            <option></option>
                        </select>
                        <label className='booking'></label>
                        <input className='booking__date' type="date" min="2023-08-1" max="2023-08-31" step="7" />
                        </div>
                    </div>
            </main>
       </section>

    )
};

export default HomePage;