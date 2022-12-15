import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./styles/Projects.css";

function Projects({project, projects, counter}) {

  const dispatch = useDispatch();

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