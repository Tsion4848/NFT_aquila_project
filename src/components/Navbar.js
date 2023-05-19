import React, { useState } from "react"; // usestate hook for the state change when screen size changes
import logo from "../assets/logo.png";
import { Link } from "react-router-dom"; // serves as a link in react
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

function Navbar() { // component for our header
    const [openLinks, setOpenLinks] = useState(false); // to create a state

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    };

    return (
        <div className="navbar">
            <div className="left" id={openLinks ? "open" : "close"}>
                <img src={logo} />
                <div className="hiddenLinks">
                    <Link to="/">Home</Link>
                    <Link to="/explore">Explore</Link>
                    <Link to="/about">About Us</Link>
                </div>
            </div>
            <div className="right">
                <Link to="/">Home</Link>
                <Link to="/explore">Explore</Link>
                <Link to="/about">About Us</Link>
                <Link to="/help">Help</Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    );
}

export default Navbar;