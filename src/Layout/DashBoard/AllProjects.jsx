import React from 'react';
import useGetProjects from '../../Hooks/useGetProjects';

const AllProjects = () => {
    const [projects, refetch, isLoading] = useGetProjects()
    console.log(projects);
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto pb-4'>
            {
                projects?.map(project =>
                    <div key={project._id} className='border-2 mr-14 mt-10 flex gap-6 items-center border-gray-400 rounded-2xl p-3'>
                        <div className='bg-purple-600 p-7 rounded-2xl flex justify-center items-center'>
                            <h2 className='text-6xl font-bold text-white'>SP</h2>
                        </div>
                        <div className='flex-1'>
                            <h2 className='text-purple-800 text-2xl font-bold'>{project.name}</h2>
                            <p>3 episodes</p>
                            <p className='mt-6 text-sm text-gray-500'>Last edited a week ago</p>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default AllProjects;