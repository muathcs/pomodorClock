import React, { useState } from 'react';
import "./styles/Projects.css";

function Projects({pomodoros, project, projects, counter}) {





  return (
    <div>
        <div>
                <div id='project-name'>
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