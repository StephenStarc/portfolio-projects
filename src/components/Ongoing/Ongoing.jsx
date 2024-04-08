import project1 from '../../assets/dslayerhero.jpg'
import project2 from '../../assets/resturantapp1.png'
import { FaGithub } from "react-icons/fa";
export default function Ongoing(){
    return <>
<div className="Ongoing_heading">
    <h1>Ongoing Projects</h1>
    <div className="card-list">
        <div className="card-item">
        <img src={project1} alt="Card Image"></img>
        <span className="api">API</span>
            <span className="backend">Express JS</span>
            <span className="db">MongoDB</span>
            <h3>Restful API for Anime Series Demon Slayer</h3>
            <h4 style={{textAlign: "left"}}>Started - 1st April 24</h4>
            <a href='https://github.com/StephenStarc/demon-slayer-api'>
                <div className="arrow">
                <FaGithub size={35}></FaGithub>
            </div></a>
        </div>
        <div className="card-item">
            <img src={project2} alt="Card Image"></img>
            <span className="frontend">React</span>
            <span className="backend">Express JS</span>
            <h3>Resturant App - Front and Backend</h3>
            <h4 style={{textAlign: "left"}}>Started - 9th April 24</h4>
            <a href='https://github.com/StephenStarc/restaurant-app-fullstack'>
                <div className="arrow">
                <FaGithub size={35}></FaGithub>
            </div></a>
            
        </div>
    </div>
</div>
    </>
}