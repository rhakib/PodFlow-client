import projectImg from '../assets/project.png'
import { BsFillPlusCircleFill } from "react-icons/bs";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button, Modal, Spinner } from 'keep-react';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import AllProjects from './DashBoard/AllProjects';
import useGetProjects from '../Hooks/useGetProjects';


const Project = () => {

    const [showModal, setShowModal] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const axiosPublic = useAxiosPublic()
    const [projects, refetch, isLoading] = useGetProjects()

    const handleInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const onClickCancel = () => {
        setShowModal(!showModal);
    };

    const onClick = async () => {
        setShowModal(!showModal);
    };
    const handleCreateProject = async () => {
        if (inputValue) {
            const res = await axiosPublic.post('/projects', { name: inputValue })
            if (res.data.insertedId) {
                setShowModal(!showModal);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your project has been created",
                    showConfirmButton: false,
                    timer: 1500
                });
                refetch()
            }
        }
    };



    return (
        <>

            <div className='max-w-screen-2xl mx-auto'>
                <div className='flex max-w-screen-xl items-center pt-6 mx-auto justify-between'>
                    <h2 className='text-3xl font-bold text-purple-700'>PodFlow</h2>
                    <div className='flex gap-3 text-3xl'>
                        <IoSettingsOutline />
                        <FaRegBell />
                    </div>
                </div>

                {
                    isLoading && <div className='flex justify-center py-40'><Spinner color="purple" size="xl" /></div>

                }

                {!projects.length > 0 && !isLoading && <>
                    <Link to='/'>
                        <h2 className='ml-32 md:ml-10 lg:ml-64 mt-10 flex items-center gap-1 border w-40 py-2 justify-center border-gray-400 rounded-3xl font-semibold'><IoHomeOutline />Back to Home</h2>
                    </Link>
                    <div className='flex max-w-screen-lg mx-auto pb-20 flex-col justify-center items-center'>
                        <h2 className='text-purple-700 text-4xl font-bold'>Create a New Project</h2>
                        <img src={projectImg} alt="" className='w-2/6 my-7' />
                        <p className='text-[#838383] text-xl text-center px-8 lg:px-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eveniet voluptatem quidem porro saepe, delectus harum labore mollitia est cum quod tempore assumenda aliquid quos voluptatum ad atque minus pariatur natus sequi molestias maiores a sapiente. Eum cum placeat corrupti ad harum, ex nihil nobis quam inventore perspiciatis esse porro?</p>
                        <button onClick={onClick} className='bg-[#211935] text-white px-4 py-2 rounded-md font-semibold text-2xl mt-4 flex items-center gap-2'><BsFillPlusCircleFill></BsFillPlusCircleFill>Create New Project</button>
                    </div></>}
                <Modal

                    size="3xl"
                    show={showModal}
                    position="center"
                >
                    <h2 className='text-2xl font-semibold'>Create Project</h2>
                    <Modal.Body>
                        <div className="mt-6 space-y-2">
                            <p>Enter project name:</p>
                            <input onChange={(e) => handleInputValue(e)} type="" placeholder='type here' className='border rounded-md border-gray-400 p-2 w-full' />
                            {!inputValue && <p className='text-red-600'>Project name can't be empty</p>}
                        </div>
                    </Modal.Body>
                    <Modal.Footer className='flex justify-end'>
                        <Button type="outlineGray" className='text-red-700' onClick={onClickCancel}>
                            Cancel
                        </Button>
                        <Button className='bg-purple-600 hover:bg-purple-600 text-white' onClick={handleCreateProject}>
                            Create
                        </Button>
                    </Modal.Footer>
                </Modal>

                {projects.length > 0 && <div>
                    <Link to='/'>
                        <h2 className='ml-32 md:ml-10 lg:ml-32 mt-10 flex items-center gap-1 border w-40 py-2 justify-center border-gray-400 rounded-3xl font-semibold'><IoHomeOutline />Back to Home</h2>
                    </Link>
                    <div className='flex justify-between items-center mr-44'>
                        <h2 className='ml-32 md:ml-10 mt-6 lg:ml-32 text-4xl text-purple-800 font-bold'>Projects</h2>
                        <button onClick={onClick} className='bg-[#211935] flex text-white px-4 py-2 rounded-md font-semibold text-2xl mt-4 items-center gap-2'><BsFillPlusCircleFill></BsFillPlusCircleFill>Create New Project</button>
                    </div>
                    <div className=''>
                        <AllProjects></AllProjects>
                    </div>
                </div>}




            </div>
        </>

    );
};

export default Project;