import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className={isOpen ? "nav" : "nav2"}>
      <div className="logo">
        <h1>Sadeeq</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      {isOpen ? (
        <MenuIcon className="menu-icon" onClick={handleClick} />
      ) : (
        <p onClick={handleClick}>X</p>
      )}
      {/* <div className="side-nav">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Me</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div> */}
    </div>
  );
}

export default Nav;
