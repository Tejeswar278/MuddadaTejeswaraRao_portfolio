import p1 from '../images/p1.png'
import p2 from '../images/p2.png'
import p3 from '../images/p3.png'
import './Project.css'
import {BsGithub} from "react-icons/bs"

export const Projects = () => {
    return (
        <div id='projects' className='project-container offset'>
            {/* <div className='m-t dot'>.</div> */}
            <div className='m-t'>
                <div className='project-header'>MY RECENT <span>WORKS</span></div>
                <div className='project-sub-header'>Here are few <span>projects</span> that I've recently worked on</div>
            </div>
            <div className='project-grid'>
                <div className='project-card'>
                    <img className='project-img' src={p1} alt='project-image'/>
                    <div className='project-title'><a className='project-l' href='https://nordstromclone.netlify.app/' target="_blank">Nordstrom</a><a className='project-g' href='https://github.com/deekshant57/Nordstrom-Clone' target="_blank"><i className='icon'><BsGithub/></i></a></div>
                    <div className='project-descript'>E-commerce website Nordstrom, Inc. is an American luxury department store chain.</div>
                    <div className='project-ts'>
                        <div>Tech-Stack : </div>
                        <div className='techstack'>HTML5 | CSS3 | Javascript | Bootstrap</div>
                    </div>
                </div>
                <div className='project-card'>
                    <img className='project-img' src={p2} alt='project-image'/>
                    <div className='project-title'><a className='project-l' href='https://lynda01.netlify.app/' target="_blank">LinkedIn learning</a><a className='project-g' href='https://github.com/murali0101/Lynda.com_Clone-frontend-' target="_blank"><i className='icon'><BsGithub/></i></a></div>
                    <div className='project-descript'>A learning platform where a user can enroll a course of his choice and he/she can choose a montly or annual plan to continue learning</div>
                    <div className='project-ts'>
                        <div>Tech-Stack : </div>
                        <div className='techstack'>HTML5 | CSS3 | Javascript | Bootstrap | Mongodb | Express | Node.js</div>
                    </div>
                </div>  
                <div className='project-card'>
                    <img className='project-img' src={p3} alt='project-image'/>
                    <div className='project-title'><a className='project-l' href='https://lumen5-murex.vercel.app/' target="_blank">Lumen5</a><a className='project-g' href='https://github.com/Tejeswar278/lumen5' target="_blank"><i className='icon'><BsGithub/></i></a></div>
                    <div className='project-descript'>Lumen5 is a website where a user can easily make videos for content marketing, through leadership and brand awareness in a snap</div>
                    <div className='project-ts'>
                        <div>Tech-Stack :</div>
                        <div className='techstack'>Mongo | Express | React | Node.js</div>
                    </div>
                </div>
            </div>
        </div>
    )
}