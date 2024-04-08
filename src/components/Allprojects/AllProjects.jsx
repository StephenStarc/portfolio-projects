import Card from "../ProjectsCard/Card"
import {PROJECTS }from '../../projects'
export default function AllProjects(){
    return<>
    <Card projects={PROJECTS}></Card>
    </>
}