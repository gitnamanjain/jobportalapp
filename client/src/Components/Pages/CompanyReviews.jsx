import { Container, Grid, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getCompanyReviews,
  searchCompany,
} from "../../Redux/CompanyReviews/action";
import Bossbaby from "../Layout/bossbaby/Bossbaby";
import { CompanyBox } from "../Layout/Companies/CompanyBox";
import "./css/companyReviews.style.css";
import { useCookies } from 'react-cookie';
import jwt from 'jsonwebtoken'



export function CompanyReviews() {
  const [companies, setCompanies] = useState([]);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  // const { isAuth } = useSelector((state) => state.login);

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
      if (token !==undefined || token) {
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


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchCompany(query));
  };

  const handleCompanyClick = (id) => {
    dispatch(getCompanyReviews(id));
    history.push(`/reviews?id=${id}`);
  };

  useEffect(() => {
    axios
      .get("https://job-api-jayesh-deploy.herokuapp.com/companies")
      .then((res) => {
        setCompanies(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container
      className="container"
      maxWidth="xl"
      style={{ marginTop: "75px" }}
    >
      <Bossbaby></Bossbaby>
      <Grid
        className="companiesHiring"
        item
        container
        xl={9}
        lg={9}
        md={9}
        sm={11}
        xs={12}
      >
        <Grid item container>
          <Grid item>
            <img
              src="/Images/location.PNG"
              alt="location pin"
              style={{ padding: "5px 0 5px 10px" }}
            />
          </Grid>
          <Grid item>
            <Typography style={{ paddingTop: "15px" }} variant="h5">
              Companies Reviews
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          style={{
            width: "1020px",
            gap: "",
            paddingLeft: "30px",
            paddingRight: "20px",
          }}
        >
          {companies.map((item) => {
            return (
              <CompanyBox
                key={item.id}
                logo={item.logo}
                name={item.company}
                rating={item.ratings}
                id={item.id}
                handleClick={handleCompanyClick}
              />
            );
          })}
        </Grid>
      </Grid>
    </Container>
  ) ;

}
