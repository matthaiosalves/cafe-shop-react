import './style.css'
import LogoCoffe from '../../assets/logo.svg'
export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logoCoffe">
        <img src={LogoCoffe} />
      </div>
      <div className="buttonsNav">
        <a className="btnLocation" href="">Porto Alegre, RS</a>
        <a className="btnCart" href="">Porto Alegre, RS</a>
      </div>
    </nav>
  );
  }