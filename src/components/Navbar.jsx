import "./Navbar.css"

export const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="nav-middle-block">
                <div><button className="m btn">Home</button></div>
                <div><button className="m btn">About</button></div>
                <div><button className="m btn">Skills</button></div>
                <div><button className="m btn">Projects</button></div>
                <div><button className="m btn">Contact</button></div>
                <div><button className="m btn">Resume</button></div>
                
            </div>
        </div>
    )
}