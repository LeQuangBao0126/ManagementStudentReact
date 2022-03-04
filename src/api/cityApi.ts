import { City, ListResponse } from 'models';
import axiosClient from './axiosClient'

const cityApi = {
    getAll() : Promise<ListResponse<City>>{
        return axiosClient.get('/cities',{
            params:{
                _limit: 10 ,
                _page:1
            }
        })  
    }
}
export default cityApi ;