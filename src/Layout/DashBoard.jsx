import { NavLink, Outlet } from 'react-router-dom';
import './dashboard.css'

const DashBoard = () => {
    const active = true
    return (
        <div className='flex'>
            <div className='w-96 bg-gray-200 min-h-screen p-6'>
                <h2 className='text-2xl px-3 font-bold'>PodFlow</h2>
                <p className='px-3 my-2'>Podcast Upload Flow</p>
                <ul className='flex flex-col gap-2 mt-4 font-medium nav px-2 text-black '>
                    <li>
                        <NavLink to='/dashboard/projects' className='rounded-3xl py-3 px-4 flex gap-2'>
                            <div className='bg-gray-300 w-7 navli h-7 rounded-full text-center font-semibold '>1</div> Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/widget-configuration' className='rounded-3xl py-3 px-4 flex gap-2'>
                            <div className='bg-gray-300 w-7 navli h-7 rounded-full text-center font-semibold '>2</div> Widget Configurations
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/proj' className='rounded-3xl py-3 px-4 flex gap-2'>
                            <div className='bg-gray-300 w-7 navli h-7 rounded-full text-center font-semibold '>3</div>Deployment
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/pro' className='rounded-3xl py-3 px-4 flex gap-2'>
                            <div className='bg-gray-300 w-7 navli h-7 rounded-full text-center font-semibold '>4</div>Pricing
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex-1 p-4'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;