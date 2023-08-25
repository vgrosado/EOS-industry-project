import '../HomePage/HomePage.scss'
import heroVid from '../../Assets/Video/AdventureoftheSeas2023CruiseShipTour.Mp4'
import Header from '../../Components/Header/Header';

function HomePage() {

    return (
       <section>
        <Header/>
            <div className='hero'>
                <video className='hero__video' autoPlay loop muted src={heroVid}></video>
            </div>
            <main className='booking'>
                <h1>Find A Cruise!</h1>
                    <div className='booking__details'>
                        <div className='booking__destination'>Destination</div>
                        <div className='booking__port'>Choose A Port</div>
                        <input className='booking__date' type="date" min="2023-08-1" max="2023-08-31" step="7" />
                    </div>
            </main>
       </section>

    )
};

export default HomePage;