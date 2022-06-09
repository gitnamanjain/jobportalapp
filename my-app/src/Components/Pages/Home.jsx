import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../Layout/Forms/SearchForm/SearchForm';
import RecentSearch from '../Layout/RecentSearch';
import "./css/Home.style.css"
// import RecentSearch from './../Layout/RecentSearch';



function Home(props) {
    return (
        <div className="container">
            <SearchForm />
            <div className="linkContainer">
                <Link className="link" to="/postjob" >
                    {`Employers Yours next job is - `} 
                </Link>
                Hire From Here
            </div>
            {/* <RecentSearch /> */}
            {/* <h3 style={{marginTop:"40px"}}>RecentSearch</h3> */}
        </div>
    );
}

export default Home;