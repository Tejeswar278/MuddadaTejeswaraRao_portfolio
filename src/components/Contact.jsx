import "./Contact.css"

export const Contact = () => {
    return (
        <div id="contact" className="contact-container offset">
            {/* <div className="m-t dot">.</div> */}
            <div className="m-t contact-header">Contact <span>me</span></div>
            <div className="contact-sub-header">Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.</div>
            <div className="contact-list">
                <a>8333014386</a>
                <a className="contact-m" href="mailto:muddadateja1999@gmail.com" target="_blank">muddadateja1999@gmail.com</a>
                <a className="contact-g" href="https://github.com/Tejeswar278" target="_blank">Github</a>
                <a className="contact-l" href="https://www.linkedin.com/in/tejeswara-rao-muddada/" target="_blank">LinkedIn</a>
            </div>
        </div>
    )
}