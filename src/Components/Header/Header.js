import '../Header/Header.scss'
import hamburger from '../../Assets/Icons/charm_menu-hamburger.svg';
import logo from '../../Assets/Icons/pngwing 1.svg'
import phone from '../../Assets/Icons/Vector.svg';


function Header(){
    return (
        <nav>
            
            <div className='icons-div'>
                <img className='icons-div__icons' alt='icon' src={hamburger}></img>
                <img className='icons-div__icons' alt='icon' src={logo}></img>
                <img className='icons-div__icons' alt='icon' src={phone}></img>
            </div>
                <div className='header'></div>
        </nav>

    )
};

export default Header;