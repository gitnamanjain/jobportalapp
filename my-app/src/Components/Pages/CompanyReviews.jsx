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
import ban from "../Images/banner.jpg";
import { CompanyBox } from "../Layout/Companies/CompanyBox";
import "./css/companyReviews.style.css";
import TypeWriter from "./floattext";

export function CompanyReviews() {
  const [companies, setCompanies] = useState([]);
  const [query, setQuery] = useState("");
  const isSearching = useSelector((state) => state.companies.isSearching);
  const dispatch = useDispatch();
  const history = useHistory();

  const { isAuth } = useSelector((state) => state.login);

  const onTextChange = (e) => {
    setQuery(e.target.value);
  };

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

  const typeWriter = [
    "AI/ML",
    "Java Developer",
    "Data Analyst",
    "iOs Devloper",
    "SDE",
  ];

  return isAuth ? (
    
      <Container className="container" maxWidth="xl" style={{marginTop:"75px"}}>
        <Grid container className="boxSearch">
          <img src={ban} className="banimg" alt="banner"></img>
        </Grid>
        <div className="ftext">
          Inspiring <TypeWriter data={typeWriter} />{" "}
        </div>
        <div className="ftext">Jobs for the future !!</div>

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

        <Grid
          className="companiesHiring"
          style={{
            borderTop: "10px solid #ff5a1f",
            padding: "25px",
            justifyContent: "space-between",
          }}
          container
          item
          xl={9}
          lg={9}
          md={9}
          sm={11}
          xs={12}
        >
          <Grid item>
            <Typography variant="h5">Rate your recent company:</Typography>
          </Grid>
          <Grid
            item
            style={{
              backgroundColor: "#f2f2f2",
              padding: "0 5px",
              borderRadius: "50px",
            }}
          >
            <Rating name="pristine" size="large" style={{ color: "blue" }} />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          style={{
            fontSize: "14px",
            backgroundColor: "white",
            padding: "15px 10px",
            margin: "0 -20px ",
          }}
        ></Grid>
      </Container>
    
  ) : (
    <div to="/review" />
  );
}
