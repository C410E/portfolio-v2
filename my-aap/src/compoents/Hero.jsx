import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="hero-container">
            <Image 
            src="/images/foto.jpeg" 
            className="profile-img" 
            width={300} height={300} 
            alt="Caio personal foto"
            />
            <h1>Olá eu so Caio 👋</h1>
            <p>
                eu sou um desenvolvedor de software, eu tenho familirialidade com front-end e back-end 
                
            </p>
            <div className="social-icons">
            <a
                href="https://github.com/C410E/"
                arial-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <FaGithub className="fa-github"/>
                </a>
                <a
                href="https://www.linkedin.com/in/caio-nepomuceno/"
                arial-label="Linkedin"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <FaLinkedin className="fa-brands fa-linkedin"/>
                </a>
            </div>
        </div>
    )
}

export default Hero