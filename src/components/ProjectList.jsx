import React, { useContext, useState } from 'react'
import AddPro from './AddPro'
import Projects from './Projects'
import { ProjectContext } from '../Contexts/ProjectContext'
import Actions from './Actions'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setName } from '../redux/trigger'
import { addNewProject } from '../redux/projectsSlicer'

function ProjectList({projects, setProjects}) {

  const dispatch = useDispatch();

  // 
  const projectList = useSelector((state) => state.projectList);


  //This useState toggles if a project is clicked or not. 
  const [clickedProjectID, setClickedProjectID] = useState(0);


    // This function is saying if the toggleStateId(which we set every time we click on one of the projects) is equal to the index(index is the project id), then add the active class, which is a border
    // that indicates this div has been clicked. 
    const setClass = (index, className) => {
      return clickedProjectID === index ? "activeClass" : '';
    }

    // deletes a project by filtering in all the project.id that don't match the clicked project id, 
    //and dropping the project that does match the project id. The project id 
    // is known from the paramaters of the div, and each delete button has access to the project it's trying to delete. 
    const deleteProject = (project) =>{
      // const newProjectList = [...projectList];
      
      
      console.log("PROJECT: ", projectList)
      // console.log("PROJECT ID: ", project.id)
      const updatedProjectList = projectList.filter((proj) => proj.id != project.id);
      dispatch(addNewProject(updatedProjectList));

      console.log("Updated: ", updatedProjectList);
      // setProjects(projects.filter((proj) => proj.id != project.id))
    }

    function selectedProject(e, clickedID){
      // setClick this is able 

      let newProjectList = [...projectList];

      // console.log("XXX", newProjectList[0].id)

      if(!projectList){
        return;
      }

      newProjectList = projectList.map((project) => {
        if (project.id === clickedID) {
          return { ...project, selected: true };
        }
        return { ...project, selected: false };

      });

        // console.log("LIST: ", project)
        // if(project.id == clickedID ){
        //   return {...project, selected:true}
          
        // } 

      // })

      dispatch(addNewProject(newProjectList))
      console.log(newProjectList)

    }
    
  
  return (
        <ul className="project-ul w-full flex flex-col justify-center items-center pl-0 ">{


          projectList.map((project) => (
            <div onClick={(e) => {
              console.log("PROJ-ID: ", project.id)
              setClickedProjectID(project.id);
              selectedProject(e, project.id)
              
            }}

            className={` w-full max-w-[480px] h-[66px] ml-[0.1em] mb-[0.3em] rounded-[5px] 
                        relative flex items-center cursor-pointer border-l-[5px] border-l-transparent  
                        hover:border-l-[5px] hover:border-[#838383] bg-[#ff6347] hover:bg-gradient-to-r hover:from-orange-200 hover:to-rose-400
                        ${project.selected == true ? " activeClass" : null}
                                                `
                      
                      } 
                        
                        key={project.id}
                        
                        >

                          <Projects project={project} />
        
            <button onClick={(e) => {
              e.stopPropagation();
              deleteProject(project)}} className='h-full  bg-gray-200 text-black border border-black hover:bg-gradient  rounded-[5px] py-[2px] px-[1px] absolute right-0 top-0 cursor-pointer pointer '>Delete</button>
          </div>

        ))

            }

        </ul>
  )
}

export default ProjectList

