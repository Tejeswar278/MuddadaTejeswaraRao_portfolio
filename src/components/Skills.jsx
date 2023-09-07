import './Skills.css'

export const Skills = () => {
    return (
        <div id='skills' className="skills-container offset">
            {/* <div className='m-t dot'>.</div> */}
            <div className='m-t skills-header'>Skills & <span>proficiencies</span></div>
            <div className='skill m-b'>
                <div className='skills-btns'>
                    <button className='skills-btn'>Mongodb</button>    
                    <button className='skills-btn'>Express</button>
                    <button className='skills-btn'>React</button>
                    <button className='skills-btn'>Nodejs</button>
                    <button className='skills-btn'>MySQL</button>
                    <button className='skills-btn'>Fastify</button>
                </div>
                <div>
                    <button className='skills-btn'>Javascript</button>
                    <button className='skills-btn'>Typescript</button>
                    <button className='skills-btn'>HTML5</button>
                    <button className='skills-btn'>CSS3</button>
                    
                </div>
            </div>
            <div className='skill'>
                    <button className='skills-btn'>Visual studio</button>
                    <button className='skills-btn'>Postman</button>
                    <button className='skills-btn'>Amazonaws</button>
                    <button className='skills-btn'>Gitlab</button>
                    <button className='skills-btn'>SQLyog</button>
                    <button className='skills-btn'>Jenkins</button>
            </div>
        </div>
    )
}