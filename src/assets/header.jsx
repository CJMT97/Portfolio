import "../header.css";
import headshot from "../images/wallpaper.jpg";

function Header() {
  return (
    <>
      <header>
        <h1>Charlie Templeton</h1>
      </header>
      <img src={headshot} alt="headshot"></img>
    </>
  );
}

export default Header;
