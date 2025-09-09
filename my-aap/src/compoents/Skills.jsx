import { 
    FaHtml5, 
    FaCss3, 
    FaJsSquare, 
    FaReact, 
    FaNodeJs, 
    FaLaravel
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi"

const Skills = () => {
    return (
        <div className="skills-container">
            <h2>Skills</h2>
            <div className="grid-skills">
                <div className="skill-card html">
                    <FaHtml5 className="fa-brands fa-html5 html-icon"/>
                    <p>Html</p>
                </div>
                <div className="skill-card css">
                    <FaCss3 className="fa-brands fa-css3-alt css-icon"/>
                    <p>CSS</p>
                </div>
                <div className="skill-card html">
                    <FaLaravel className="fa-brands fa-css3-alt css-icon"/>
                    <p>Laravel</p>
                </div>
                <div className="skill-card js">
                    <FaJsSquare className="fa-brands fa-js-square js-icon"/>
                    <p>JavaScript</p>
                </div>
                <div className="skill-card react">
                    <FaReact className="fa-brands fa-react react-icon"/>
                    <p>React</p>
                </div>
                <div className="skill-card node">
                    <FaNodeJs className="fa-brands fa-node-js node-icon"/>
                    <p>Node</p>
                </div>
                <div className="skill-card next">
                    <TbBrandNextjs className="fa-brands fa-react react-icon"/>
                    <p>Next</p>
                </div>
                <div className="skill-card react">
                    <BiLogoTypescript className="fa-brands fa-react react-icon"/>
                    <p>TypeScript</p>
                </div>  
            </div>
        </div>
    )
}

export default Skills