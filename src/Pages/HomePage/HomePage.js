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
                <div className='booking__details'></div>
            </main>
       </section>

    )
};

export default HomePage;