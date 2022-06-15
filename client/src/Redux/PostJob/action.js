import {
  POST_JOB_REQUEST,
  POST_JOB_SUCCESS,
  POST_JOB_FAILURE,
} from "./actionType";
import { v4 as uuid } from "uuid";
import axios from "axios";

const postJobRequest = () => {
  return {
    type: POST_JOB_REQUEST,
  };
};

const postJobSuccess = () => {
  return {
    type: POST_JOB_SUCCESS,
  };
};

const postJobFailure = () => {
  return {
    type: POST_JOB_FAILURE,
  };
};

export const makePostJobRequest = (payload)=>(dispatch)=>{
    dispatch(postJobRequest())
    // const jobid=uuid();
    console.log(payload);
    return axios.post('https://job-api-jayesh-deploy.herokuapp.com/jobs',{
      // companyName: payload.companyName,
      // companyUrl: payload.companyUrl,
      // date: payload.date,
      // education: payload.education,
      // endSalary: payload.endSalary,
      // jobDescription: payload.jobDescription,
      // jobTitle: payload.jobTitle,
      // jobType: payload.jobType,
      // location: payload.location,
      // occupation: payload.occupation,
      // salaryType: payload.salaryType,
      // snippet: payload.snippet,
      // startSalary: payload.startSalary,
      ...payload,
      jobkey:uuid()
        
    }).then((res)=>{
      alert("Job Posted Sucessfully :) ")
      dispatch(postJobSuccess())
    }).catch(err=>{
        dispatch(postJobFailure())
    })
};