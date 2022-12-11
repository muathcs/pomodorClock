import React, { useState } from 'react';
import "./styles/Projects.css";

function Projects({project, projects, counter}) {

  return (
        <div>
            <div id='project-name'>
                    {project.text}
            </div>

            <div id='tally'>
                {project.counter}/{project.tally}
            </div>
    </div>
  )
}

export default Projects