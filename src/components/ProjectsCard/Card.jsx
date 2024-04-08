import './card.css'
import { FaGithub } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
export default function Card({projects}){

    return <>
    <div className="projects-container">
      <h1>Projects</h1>
    <ul className="projects-cards">
       { projects.map((project)=>{
        return (
        <li className="projects-cards_item">
    <div className="projects-card">
    <div className="projects-card_image"><img src={project.image} />
    </div>
    <div className="projects-card_content">
          <h2 className="projects-card_title">{project.name}</h2>
          <p className="projects-card_text">{project.descripition}</p>
          <a href={project.github} target='_blank'> <button className="btn card_btn"> <div className='flex'><FaGithub size={20}/>Github</div> </button></a>
          <a href={project['live-site']} target='_blank'><button className="btn card_btn"> <div className='flex'><FaGlobeAmericas size={20} />Live Site</div> </button></a>
        </div>
      </div>
    </li> 
       )})}
    </ul>
    </div>
    
    </>
}