import './Skills.css'
import {BiLogoMongodb,BiLogoReact,BiLogoNodejs,BiLogoJavascript} from "react-icons/bi"
import {GrMysql} from "react-icons/gr"
import {SiFastify,SiTypescript,SiJavascript,SiHtml5,SiCss3,SiPostman,SiAmazonaws,SiGitlab,SiJenkins,SiExpress} from "react-icons/si"
import {TbBrandVscode} from "react-icons/tb"

function Skills(){
    return (
        <div id='skills' className="skills-container offset">
            {/* <div className='m-t dot'>.</div> */}
            <div className='m-t skills-header'>Skills & <span>proficiencies</span></div>
            <div className='skill m-b'>
                <div className='skills-btns'>
                    <button className='skills-btn'><span className='mongo'><BiLogoMongodb/></span><br/>  Mongodb</button>    
                    <button className='skills-btn'><span className='express'><SiExpress/></span><br/>  Express.js</button>
                    <button className='skills-btn'><span className='react'><BiLogoReact/></span><br/>  React</button>
                    <button className='skills-btn'><span className='node'><BiLogoNodejs/></span><br/>  Node.js</button>
                    <button className='skills-btn'><span className='sql'><GrMysql/></span><br/>  MySQL</button>
                    <button className='skills-btn'><span className='fastify'><SiFastify/></span><br/>  Fastify</button>
                </div>
                <div>
                    <button className='skills-btn'><span className='javascript'><SiJavascript/></span><br/>  Javascript</button>
                    <button className='skills-btn'><span className='typesccript'><SiTypescript/></span><br/>  Typescript</button>
                    <button className='skills-btn'><span className='html'><SiHtml5/></span><br/>  HTML5</button>
                    <button className='skills-btn'><span className='css'><SiCss3/></span><br/>  CSS3</button>
                    
                </div>
            </div>
            <div className='m-t tools-header skills-header'>Tools</div>
            <div className='skill tools'>
                    <button className='skills-btn'><span className='visualstudio'><TbBrandVscode/></span><br/>  Visual studio</button>
                    <button className='skills-btn'><span className='postman'><SiPostman/></span><br/>  Postman</button>
                    <button className='skills-btn'><span className='aws'><SiAmazonaws/></span><br/>  AWS</button>
                    <button className='skills-btn'><span className='gitlab'><SiGitlab/></span><br/>  Gitlab</button>
                    <button className='skills-btn'>SQLyog</button>
                    <button className='skills-btn'><span className='jenkins'><SiJenkins/></span><br/>  Jenkins</button>
            </div>
        </div>
    )
}

export default Skills