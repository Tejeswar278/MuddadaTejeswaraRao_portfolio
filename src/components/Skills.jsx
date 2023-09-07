import './Skills.css'
import {BiLogoMongodb,BiLogoReact,BiLogoNodejs,BiLogoJavascript} from "react-icons/bi"
import {GrMysql} from "react-icons/gr"
import {SiFastify,SiTypescript,SiJavascript,SiHtml5,SiCss3,SiPostman,SiAmazonaws,SiGitlab,SiJenkins} from "react-icons/si"
import {TbBrandVscode} from "react-icons/tb"

function Skills(){
    return (
        <div id='skills' className="skills-container offset">
            {/* <div className='m-t dot'>.</div> */}
            <div className='m-t skills-header'>Skills & <span>proficiencies</span></div>
            <div className='skill m-b'>
                <div className='skills-btns'>
                    <button className='skills-btn'><BiLogoMongodb/>  Mongodb</button>    
                    <button className='skills-btn'>Express.js</button>
                    <button className='skills-btn'><BiLogoReact/>  React</button>
                    <button className='skills-btn'><BiLogoNodejs/>  Node.js</button>
                    <button className='skills-btn'><GrMysql/>  MySQL</button>
                    <button className='skills-btn'><SiFastify/>  Fastify</button>
                </div>
                <div>
                    <button className='skills-btn'><SiJavascript/>  Javascript</button>
                    <button className='skills-btn'><SiTypescript/>  Typescript</button>
                    <button className='skills-btn'><SiHtml5/>  HTML5</button>
                    <button className='skills-btn'><SiCss3/>  CSS3</button>
                    
                </div>
            </div>
            <div className='m-t tools-header skills-header'>Tools</div>
            <div className='skill tools'>
                    <button className='skills-btn'><TbBrandVscode/>  Visual studio</button>
                    <button className='skills-btn'><SiPostman/>  Postman</button>
                    <button className='skills-btn'><SiAmazonaws/>  AWS</button>
                    <button className='skills-btn'><SiGitlab/>  Gitlab</button>
                    <button className='skills-btn'>SQLyog</button>
                    <button className='skills-btn'><SiJenkins/>  Jenkins</button>
            </div>
        </div>
    )
}

export default Skills