import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Projects({project, projects, counter}) {

  const dispatch = useDispatch();

  return (
        <div className='flex items-center'>
            <div className='ml-[2em] text-[16px] font-bold'>
                    {project.text}
            </div>

            <div className='absolute right-[4em] text-[23px] flex items-center justify-center font-[20px]  text' >
                {project.counter}/{project.tally}
            </div>
    </div>
  )
}

export default Projects