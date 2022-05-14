import "./Contact.css"

export const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-header">Contact <span>me</span></div>
            <div className="contact-sub-header">Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.</div>
            <div className="contact-list">
                <button>8333014386</button>
                <button><a className="contact-m" href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlJWQFScXMcJKHSHdRCVwlWMVPRnWwWGFqplfxxKvjdlRfDWsCrPhcfkdjDnXFtXsNVBbB" target="_blank">muddadateja1999@gmail.com</a></button>
                <button><a className="contact-g" href="https://github.com/Tejeswar278" target="_blank">Github</a></button>
                <button><a className="contact-l" href="https://www.linkedin.com/in/tejeswara-rao-muddada/" target="_blank">LinkedIn</a></button>
            </div>
        </div>
    )
}