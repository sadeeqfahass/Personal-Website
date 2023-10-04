import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

function Nav() {

  const [isOpen, setIsOpen] = useState(false);

  function openMenu() {
    setIsOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsOpen((prev) => !prev);
  }

  function handleClick() {
    setIsOpen(false);
  }

  if(isOpen) {
    window.onscroll = () => {
      setIsOpen( () => false);
    }
  }

  return (
    <div className="nav">
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
        <CloseIcon className="close-icon" onClick={closeMenu} />
      ) : (
        <MenuIcon className="menu-icon" onClick={openMenu} />
      )}

      <div className={isOpen ? "show" : "side-nav"}>
        <div className="items">
          <ul>
            <li onClick={handleClick}>
              <a href="#header">Home</a>
            </li>
            <li onClick={handleClick}>
              <a href="#about">About Me</a>
            </li>
            <li onClick={handleClick}>
              <a href="#skills">Skills</a>
            </li>
            <li onClick={handleClick}>
              <a href="#projects">Projects</a>
            </li>
            <li onClick={handleClick}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
