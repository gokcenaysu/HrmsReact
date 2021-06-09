import axios from 'axios';

export default class JobPostingService{
    getJobPostings(){
        return axios.get("http://localhost:8080/api/job-postings/getAll")
    }
    getJobPostingsOrderByAppDead(){
        return axios.get("http://localhost:8080/api/job-postings/getAllApplicationDeadline")
    }
}