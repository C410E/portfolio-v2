
const Footer = () => {
    return (
        <>
        <hr />
        <div className="footer-container">
            <p>
                @ {new Date().getFullYear()} Caio Portfolio
            </p>
            <div className="social-icons">
                <a
                href="https://github.com/C410E/"
                arial-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-github"></i>
                </a>
                <a
                href="https://www.linkedin.com/in/caio-nepomuceno/"
                arial-label="Linkedin"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-linkedin"></i>
                </a>
            </div>
        </div>
        </>
    )
}

export default Footer