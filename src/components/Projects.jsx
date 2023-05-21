import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Projects({project}) {

  const dispatch = useDispatch();

  // const testVal  = useSelector((state) => state.timer.testVal);


  return (
        <div className='flex items-center'>
            <div className='ml-[2em] text-[16px] font-bold'>
                    {project.name}
            </div>

            <div className='absolute right-[4em] text-[23px] flex items-center justify-center font-[20px]  text' >
                {project.tally}/{project.duration}
            </div>
    </div>
  )
}

export default Projects