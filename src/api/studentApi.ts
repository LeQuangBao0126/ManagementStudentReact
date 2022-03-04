import {  ListParams, ListResponse ,Student} from 'models';
import axiosClient from './axiosClient'

const studentApi = {
    getAll(params? : ListParams) : Promise<ListResponse<Student>>{
        return axiosClient.get("/students",{ params :params })
    },
    getById(id : string) : Promise<Student>{
        const url = `/students/${id}`
        return axiosClient.get(url)
    },
    add(data : Student ) : Promise<Student>{
        return axiosClient.post("/students",data );
    },
    update(data  : Student) : Promise<Student>{
        return axiosClient.post("/students",data );
    },
    remove(id : string) : Promise<any>{
        const url = `/students/${id}` ;
        return axiosClient.delete(url);
    },
}
export default studentApi ;