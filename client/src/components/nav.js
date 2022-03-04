import logo from '../images/nav_logo.jpg'

export default function Nav() {
    return (
        <nav id="navbar">
            <div className="logo">
                <img src={logo} alt="Best Competition Site" />
            </div>
            <div id="nav-btn">
                <div className="items">
                    <ul>
                        <li className="items1 active"><a href="#home">Home</a></li>
                        <li className="items2"><a href="#rules-container">About Comp</a></li>
                        <li className="items3"><a href="#contact">Contact Us</a></li>
                        <li className="items4"><a href="#home">Sign In</a></li>
                        <li className="items5"><a href="#home">Login</a></li>
                    </ul>
                </div>
                <div id="solo">
                    <button className="btn" id="sign-btn">
                        Sign In
                    </button>
                    <button className="btn" id="login-btn">
                        Login
                    </button>
                </div>
            </div>
        </nav>
    )
}
