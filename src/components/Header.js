import { NavLink } from "react-router-dom"


const Header =() => {
    return (
            <div className="container" >
                <div className="nav-wrap">
                    <nav className="nav">
                        <div className="event">
                            <NavLink exact to="/" className="nav__item">Event Details</NavLink>
                            <span className="material-icons">
                                expand_more
                            </span>
                        </div>
                        <NavLink exact to="/RegistrationForm" className="nav__item">Registration Form</NavLink>
                    </nav>
                   
                    <div>
                            <button href="#" > Sign In</button>
                    </div>
                </div>
            </div>
    )
};

export default Header