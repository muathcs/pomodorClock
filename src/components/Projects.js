import React, { useState } from 'react';
import "./styles/Projects.css";
function Projects({pomodoros, project, projects, counter}) {





  return (
    <div>
        <div>
                <div id='project-name' className="divCard" item-color='1' title='Tab 1'>
                    {project.text}
                </div>

            <div id='tally'>
                {project.counter}/{project.tally}
            </div>

        </div>

  
    </div>
  )
}

export default Projects