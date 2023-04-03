import MenuIcon from '@mui/icons-material/Menu';

function Nav() {
  return (
    <div className="nav">
        <div className="logo">
            <h1>Sadeeq</h1>
        </div>
        <div className="nav-items">
            <ul>
                <li><a href="#header">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        <MenuIcon className='menu-icon'/>
        {/* <div className="side-nav">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Me</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div> */}
    </div>
  )
}

export default Nav
