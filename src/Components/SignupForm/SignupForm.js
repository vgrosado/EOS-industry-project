import '../SignupForm/SignupForm.scss'

function SignupForm() {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your video has been uploaded successfully')
    }
    
    return(
        <section className='signup'>
            <div className='signup__heading-div'>
            <div className='signup__heading'>
            <p className='signup__title'>UP TO $650 OFF ON SELECT CRUISES</p>
            <p className='signup__subtitle'>Plus 30% off all cruises and kids sail free*</p>
            </div>
            <p className='signup__title'> GET ROYAL DEALS, SIGN UP TODAY</p>
            </div>
            <form className='signup__form'>
                <div className='signup__form-div'>
                <input className='signup__input' type='text' placeholder='First Name'/>
                <input className='signup__input'type='text' placeholder='Last Name'/>
                <input className='signup__input' type='text' placeholder='Email Address'></input>
                <select className='signup__select'>
                <option value="" disabled selected hidden>
                Country/Location
                </option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>India</option>
                <option>China</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
                <option>Australia</option>
                <option>Italy</option>
                </select>
                <button onClick={handleSubmit} className='signup__button'>SIGN UP</button>
                </div>
            </form>
            <div className='signup__footer-div'>
            <p className='signup__footer'>Sign up to receive information about our special offers and deals. You can unsubscribe at any time. For more details about how we use your information, view our Privacy Policy.</p>
            </div>
        </section>
    )
};

export default SignupForm;