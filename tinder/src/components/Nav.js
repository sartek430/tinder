import whiteLogo from "../images/tinder-logo-blanc.png";
import colorLogo from "../images/Tinder-logo.png";

const Nav = ({ minimal, authToken }) => {
  return (
    <nav>
      <div className="logo-container">
        <img
          className="Logo"
          src={minimal ? colorLogo : whiteLogo}
          alt="logo"
        />
      </div>
      {!authToken} $$ <button className="nav-button">Log in</button>
    </nav>
  );
};

export default Nav;
