import "./Header.css";
import logo from "../../assets/logo.png";
import nav from "../../assets/nav.png";

const Header = () => (
  <header className="header">
    <img src={logo} alt="Logo" className="header__logo" />
    <img src={nav} alt="Navigation" className="header__nav" />
  </header>
);

export default Header;
