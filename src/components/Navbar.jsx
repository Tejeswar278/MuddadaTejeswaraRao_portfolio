import "./Navbar.css"

export const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="nav-middle-block">
                <a className="m" href="#home"><div><button className="m btn">Home</button></div></a>
                <a className="m" href="#about"><div><button className="m btn">About</button></div></a>
                <a className="m" href="#skills"><div><button className="m btn">Skills</button></div></a>
                <a className="m" href="#projects"><div><button className="m btn">Projects</button></div></a>
                <a className="m" href="#contact"><div><button className="m btn">Contact</button></div></a>
                <a className="m" href="https://www.canva.com/design/DAE8Y4Nu5TY/ikBgov_AYxtQITyanCbigA/view?utm_content=DAE8Y4Nu5TY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank"><div><button className="m btn">Resume</button></div></a>
                
            </div>
        </div>
    )
}