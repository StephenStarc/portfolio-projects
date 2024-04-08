
import { useState } from "react"
import Hamburger from "./Hamburger"
import CloseIcon from "../CrossIcon"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";
export default function Navbar(){
    const [showNav, SetShowNav] = useState(false)

    const toggleNavItems = () => {
        
        SetShowNav((prev)=> !prev)
    }
    return(
        <nav>
            <div className="container" id="nav">
        <div><a href='https://portfolio-starc.netlify.app/' className="logo">Projects</a></div>
        <div className="menu-icon" onClick={toggleNavItems}>
            {!showNav ? <Hamburger /> : <CloseIcon/>}
        </div>
            <div className={`nav-links ${showNav ? 'active' : ''}`}>
            <ul >
            <li><a href='https://github.com/StephenStarc'><div className="flex sps"><FaGithub size={30}/> Github</div></a></li>
            <li><a href='https://www.linkedin.com/in/stephen-st/'><div className="flex sps"><FaLinkedin size={30}/> Linkedin</div></a></li>
            <li><a href='https://portfolio-starc.netlify.app/'><div className="flex sps"><IoMdGlobe size={30}/> Portfolio</div></a></li>
            </ul>
         </div>
         </div>
        </nav>
    )
    
}

