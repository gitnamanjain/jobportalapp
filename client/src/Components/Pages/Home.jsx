import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../Layout/Forms/SearchForm/SearchForm';
// import RecentSearch from '../Layout/RecentSearch';
import "./css/Home.style.css"
import { useSelector, useDispatch } from 'react-redux';
import { makeSaveJobRequest } from '../../Redux/SaveJob/actions';
import { getSearchData, setCurrentPage } from '../../Redux/Search/actions';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { Box } from '@mui/material';
import JobMenu from '../Layout/Menu/JobMenu';
import { Grid } from '@mui/material';
import JobDescription from '../Layout/JobDescription';
import data from "./db.json";





function Home(props) {


    const query = new URLSearchParams(props.location.search)


    let job = query.get('q') || ""
    let location = query.get('location') || ""
    let jt = query.get("jt") || ""
    let occu = query.get("occupation") || ""
    let edu = query.get("education") || ""
   
    
    const [ignored, forceUpdate] =useReducer(x => x + 1, 0)

    let jobs=data.jobData;
    let totalCount = useSelector(state=>state.search.totalCount)
    const loggedUser = useSelector(state=>state.login.loggedUser);
    let isLoading = useSelector(state=>state.search.isLoading)
    let p = useSelector(state=>state.search.page)
    
    
    const pageNo = query.get('page')
    let [page,setPage] = useState(Number(pageNo))


    let [jobData,setJobData] = useState(null)   
    const dispatch = useDispatch()
    const history = useHistory()
    

    useEffect(()=>{
        dispatch(getSearchData(job,location,page))
        forceUpdate()
    },[job,location,page])


    const getJobDescription = (job)=>{    
                setJobData(job)     
    }
    const mystate=useSelector((state)=>state.login.loggedUser);

    const handelSave = ({jobkey,location,companyName,jobTitle})=>{
        const {id,saved_jobs} = loggedUser
        saved_jobs[jobkey] = {
            jobkey,location,companyName,jobTitle,
            dateSaved:new Date().getTime()
        }
        
        dispatch(makeSaveJobRequest({user_id:mystate.user_id,saved_jobs}))
    }

    const removeFromSaved = ({jobkey})=>{
        const {id,saved_jobs} = loggedUser
        delete saved_jobs[jobkey]
        dispatch(makeSaveJobRequest({user_id:mystate.user_id,saved_jobs}))
    }

    const contain={
        width:"80%",
        marginLeft:"auto",
        marginRight:"auto"
    }


    return (
        <div className="container" style={contain}>
            <SearchForm />
            <div className="linkContainer">
                <Link className="link" to="/postjob" >
                    {`Employers Yours next job is - `} 
                </Link>
                Hire From Here
            </div>
            {console.log(jobs)}
            
            <div style={{padding:"20px",fontWeight:"bolder"}}>
                Top jobs For you
            </div>
        <Box style={{display:'flex'}} >  
            <Grid className="jobContainer" classes="fhhh" container>
            {
                jobs.map((job,index)=>
                <Grid className="card"  item key={job.jobkey} lg={12} md={12} sm={12} xs={12} >
                    <Box 
                    onClick={()=>getJobDescription(job)} 
                    >
                        <Typography  className="job_title">
                            {job.jobTitle}
                        </Typography>
                        <Typography className="job_subTitle">
                            {job.companyName}
                        </Typography>
                        <Typography className="job_subTitle">
                            {job.location}
                        </Typography>
                        <Typography className="job_subTitle">
                        ₹ {Number(job.startSalary).toLocaleString('en-IN')} - ₹ {Number(job.endSalary).toLocaleString('en-IN')}
                        </Typography>
                    </Box>
                    <JobMenu 
                    job={job} 
                    handelSave={handelSave}
                    removeFromSaved={removeFromSaved}/>
                </Grid>)

            }
            </Grid>
            {
                    jobData ? <JobDescription  className="chhh" jobData={jobData} summary={job.snippet} /> : <></> 
            }
        </Box>
            


            {/* <RecentSearch /> */}
            {/* <h3 style={{marginTop:"40px"}}>RecentSearch</h3> */}
        </div>
    );
}

export default Home;