

function Nav() {
  return (
    <div className="nav">
        <div className="logo">
            <h1>Sadeeq</h1>
        </div>
        <div className="nav-items">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Me</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <i class="fa-solid fa-bars"></i>
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
