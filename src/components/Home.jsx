import profile from "../images/profile.jpg"
import "./Home.css"

export const Home = () => {
    return (
        <div id="home" className="home-container">
            {/* <div className="m-t">.</div> */}
            <div className="m-t home-profile"><img className="profile-img" src={profile} alt="profile-image"/></div>
            <div className="home-intro">
                <div className="">Hi I'm <span className="blue">Muddada Tejeswara Rao</span></div>
                <div><span className="blue">MERN</span> Stack Developer</div>
            </div>
        </div>
    )
}