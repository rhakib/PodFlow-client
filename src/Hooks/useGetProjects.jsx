import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useGetProjects = () => {

 
    const axiosPublic = useAxiosPublic()
    const getProject = async () => {
        const res = await axiosPublic.get('/projects')
        return res.data
    }

    const { data: projects = [], refetch, isLoading } = useQuery({
        queryKey: ['projects'],
        queryFn: getProject
    })

    console.log(projects);
    return [projects, refetch, isLoading]
};

export default useGetProjects;