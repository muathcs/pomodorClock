import React from 'react'
import AddPro from './AddPro'
import Projects from './Projects'

function ProjectList({project, setProject, pomodoros}) {
  return (
//     <div className="todo-container">
//     <ul className="todo-list">
//        {

//         filterTodos.map(todo => (
//             <Todo todos={todos} setTodos={setTodos} key={todo.id} todo={todo}/>
            
//             )
//         )
//        }
//     </ul>
// </div>

    <div>
        <ul>{
          
        
        project.map((project) => (
            <Projects pomodoros={pomodoros} project={project} key={project.id}/>

        ))
        

            }

        </ul>
    </div>
  )
}

export default ProjectList