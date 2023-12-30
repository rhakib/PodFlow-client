import projectImg from '../assets/project.png'
import { BsFillPlusCircleFill } from "react-icons/bs";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";


const Project = () => {
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <div className='flex max-w-screen-xl pt-6 mx-auto justify-between'>
                <h2 className='text-3xl font-bold text-purple-700'>PodFlow</h2>
                <div className='flex gap-3 text-3xl'>
                    <IoSettingsOutline  />
                    <FaRegBell/>


                </div>
            </div>
            <h2 className='ml-64 mt-10 flex items-center gap-1 border w-40 py-2 justify-center border-gray-400 rounded-3xl font-semibold'><IoHomeOutline />Back to Home</h2>
            <div className='flex max-w-screen-lg mx-auto pb-20 flex-col justify-center items-center'>
                <h2 className='text-purple-700 text-4xl font-bold'>Create a New Project</h2>
                <img src={projectImg} alt="" className='w-2/6 my-7' />
                <p className='text-[#838383] text-xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eveniet voluptatem quidem porro saepe, delectus harum labore mollitia est cum quod tempore assumenda aliquid quos voluptatum ad atque minus pariatur natus sequi molestias maiores a sapiente. Eum cum placeat corrupti ad harum, ex nihil nobis quam inventore perspiciatis esse porro?</p>
                <button className='bg-[#211935] text-white px-4 py-2 rounded-md font-semibold text-2xl mt-4 flex items-center gap-2'><BsFillPlusCircleFill></BsFillPlusCircleFill>Create New Project</button>

            </div>
        </div>
    );
};

export default Project;