import "./Header.css";
import Icon from "../../assets/icon.svg";

function Header() {
  return (
    <>
      <header>
        <img src={Icon} alt="" className="icon" />
        <h1>Shopping List</h1>
      </header>
      <hr />
    </>
  );
}

export default Header;
