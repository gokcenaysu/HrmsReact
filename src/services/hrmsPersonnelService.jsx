import axios from 'axios';

export default class HrmsPersonnelService{
    getHrmsPersonnels(){
        return axios.get("http://localhost:8080/api/hrms-personnels/getall")
    }
}