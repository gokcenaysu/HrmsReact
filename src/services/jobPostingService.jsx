import axios from 'axios';

export default class JobPostingService{
    getJobPostings(){
        return axios.get("http://localhost:8080/api/job-postings/getAll")
    }

    post(values){
        return axios.post("http://localhost:8080/api/job-postings/post",values)
    }
    getAllCompanyName(id){
        return axios.get("http://localhost:8080/api/job-postings/getAllCompanyName")
    }

    getAllApplicationDeadline(){
        return axios.get("http://localhost:8080/api/job-postings/getAllApplicationDeadline")
    }
}