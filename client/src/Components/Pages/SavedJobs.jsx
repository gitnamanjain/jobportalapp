import { Box, Button, Typography } from "@mui/material";
import { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { makeApplyRequest } from "../../Redux/JobApply/actions";
import { makeSaveJobRequest } from "../../Redux/SaveJob/actions";
import { useCookies } from 'react-cookie';
import jwt from 'jsonwebtoken'
import { ApplyModal } from "../Layout/JobApplyModal/ApplyModal";
import { useHistory} from 'react-router-dom';
import { useEffect } from 'react';

function SavedJobs(props) {

const history = useHistory()
const [cookies, setCookie, removeCookie]= useCookies(['jayjwt']);

async function populateQuote() {
const req = await fetch('http://localhost:9002/jwt', {
        method:'GET',
  headers: {
    'x-access-token': cookies.jayjwt,
  }
})

if(req.status === 201){
    // alert("fine");
    return;
}
else{
    removeCookie('jayjwt');
    history.push('/login')
}
}
// Mynewpagetest
useEffect(() => {
    const token =cookies.jayjwt;
    console.log(token);

      if (token !==undefined) {
          const user = jwt.decode(token)
          if (!user) {
              removeCookie('jayjwt');
              history.push('/login')
          } else {
              populateQuote()
          }
      }
    else{
        history.push('/login');
    }
}, [])


  const { saved_jobs, applied_job, id } = useSelector(
    (state) => state.login.loggedUser
  );

  const mystate = useSelector((state) => state.login.loggedUser);

  const jobKeys = Object.keys(saved_jobs).reverse();
  const applied = Object.keys(applied_job).reverse();

  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  const dispatch = useDispatch();

  // console.log(loggedUser)
  const [open, setOpen] = useState(false);
  const [jobId, setJobId] = useState("");

  const removeFromSaved = ({ jobkey }) => {
    console.log(mystate.user_id);

    const user_id = mystate.user_id;

    delete saved_jobs[jobkey];
    dispatch(makeSaveJobRequest({ user_id, saved_jobs }));
    forceUpdate();
  };

  const handleClose = () => {
    setOpen(false);
    setJobId("");
  };

  const handleOpen = (id) => {
    setJobId(id);
    setOpen(true);
  };

  const handleApply = () => {
    const user_id = mystate.user_id;
    // console.log(jobId)
    applied_job[jobId] = { ...saved_jobs[jobId] };
    delete saved_jobs[jobId];
    dispatch(makeApplyRequest({ user_id: user_id, saved_jobs, applied_job }));
    setOpen(false);
    forceUpdate();
  };

  return (
    <div className={styles.savedjobconatiner}>
      <Box>
        <Typography
          variant={"h5"}
          style={{ fontSize: "40px", marginBottom: "20px" }}
        >
          My Jobs
        </Typography>
        <ul style={{ display: "flex", marginBottom: "20px" }}>
          <NavLink
            to="/savedjobs"
            activeStyle={{
              color: "#127c71",
              textDecoration: "underline",
            }}
            style={{
              fontSize: "25px",
              marginRight: "30px",
            }}
          >
            Saved {jobKeys.length}
          </NavLink>
          <NavLink
            to="/appliedjobs"
            style={{
              fontSize: "25px",
            }}
          >
            Applied {applied.length}
          </NavLink>
        </ul>
        {ignored ? null : null}
        <Box>
          {jobKeys.map((key) => {
            return (
              <Box
                style={{
                  display: "flex",
                  border: "1px solid black",
                  borderRadius: "10px",
                  padding: "20px",
                }}
                key={key}
              >
                <Box style={{ width: "500px" }}>
                  <Typography
                    variant="h5"
                    style={{ fontSize: "18px", marginBottom: "15px" }}
                  >
                    {saved_jobs[key].jobTitle}
                  </Typography>
                  <Box
                    style={{
                      marginBottom: "15px",
                      fontWeight: "600",
                      color: "grey",
                    }}
                  >
                    {saved_jobs[key].companyName} | {saved_jobs[key].location}
                  </Box>
                  <Box
                    style={{
                      marginBottom: "30px",
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "grey",
                    }}
                  >
                    Saved
                  </Box>
                </Box>
                <Box style={{ display: "flex" }}>
                  <Button
                    className="applyButton"
                    style={{
                      width: "100px",
                      height: "40px",
                      border: "1px solid",
                    }}
                    onClick={() => handleOpen(key)}
                    disabled={applied_job[key] ? true : false}
                  >
                    {applied_job[key] ? "Already applied" : "Apply"}
                  </Button>
                </Box>
                <Box
                  onClick={() => {
                    removeFromSaved({ jobkey: key });
                  }}
                  style={{
                    cursor: "pointer",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span>X</span>
                </Box>
              </Box>
            );
          })}
        </Box>
        <ApplyModal
          open={open}
          handleClose={() => handleClose()}
          jobId={jobId}
          handleApply={() => handleApply()}
        />
      </Box>
    </div>
  );
}

export default SavedJobs;
