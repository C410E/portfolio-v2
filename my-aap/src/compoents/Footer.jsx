import { FaGithub, FaLinkedin } from "react-icons/fa"
const Footer = () => {
    return (
        <>
        <hr />
        <div className="footer-container">
            <p>
                @ {new Date().getFullYear()} Caio Portfolio
            </p>
            <div className="social_icons">
                <a
                href="https://github.com/C410E/"
                arial-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>
                <a
                href="https://www.linkedin.com/in/caio-nepomuceno/"
                arial-label="Linkedin"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </a>
            </div>
        </div>
        </>
    )
}

export default Footer