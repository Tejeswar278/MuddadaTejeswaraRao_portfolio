import React, { useRef } from "react"
import "./Navbar.css"
import {AiFillCloseCircle} from "react-icons/ai"
import {FaBars} from "react-icons/fa"

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
                <a className="m" onClick={shownavref} href="https://drive.google.com/file/d/12kRTajL2itGNCJZCJ1i0QuTrm2ISOn34/view?usp=sharing" target="_blank">Resume</a>
                <button className="nav-btn nav-close-btn" onClick={shownavref}>
                    <AiFillCloseCircle/>
                </button>
            </nav>
            <button className="nav-btn" onClick={shownavref}>
                <FaBars/>
            </button>
        </div>
    )
}

export default Navbar