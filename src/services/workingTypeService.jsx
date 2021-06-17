import axios from "axios";

export default class WorkingTypeService{
    getWorkingTypes(){
        return axios.get("http://localhost:8080/api/working-types/getAll")
    }

}