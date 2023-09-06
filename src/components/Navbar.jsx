import React, { useRef } from "react"
import "./Navbar.css"
import {AiFillCloseCircle} from "react-icons/ai"
import {FaBars} from "react-icons/fa"
import {IoClose} from "react-icons/io"

function Navbar (){
    const navref = useRef();

    const shownavref=()=> {
        navref.current.classList.toggle("responsive")
    }
    return (
        <div className="nav-container">
            <nav ref={navref}>
                <a className="m" onClick={shownavref} href="#home">Home</a>
                <a className="m" onClick={shownavref} href="#about">About</a>
                <a className="m" onClick={shownavref} href="#skills">Skills</a>
                <a className="m" onClick={shownavref} href="#projects">Projects</a>
                <a className="m" onClick={shownavref} href="#contact">Contact</a>
                <a className="m" onClick={shownavref} href="https://www.canva.com/design/DAE8Y4Nu5TY/ikBgov_AYxtQITyanCbigA/view?utm_content=DAE8Y4Nu5TY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank">Resume</a>
                <button className="nav-btn nav-close-btn" onClick={shownavref}>
                    <IoClose/>
                </button>
            </nav>
            <button className="nav-btn" onClick={shownavref}>
                <FaBars/>
            </button>
        </div>
    )
}

export default Navbar