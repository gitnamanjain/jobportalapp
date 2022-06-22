import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import SearchForm from "../Forms/SearchForm/SearchForm";
import styles from "./MyAppbar.module.css";
import UserMenu from "./UserMenu";
// import handleSearch from './../Forms/SearchForm/SearchForm';
// import SearchForm from "../Forms/SearchForm/SearchForm";
// import { useState } from "react";
// import { useEffect } from 'react';
// import { useHistory } from 'react-router-dom'
// import { useCookies } from 'react-cookie';
// import jwt from 'jsonwebtoken'

export default function MyAppbar() {
  const { isAuth } = useSelector((state) => state.login);
  // let jobs = useSelector(state=>state.search.searched)

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          elevation={0}
          style={{ background: "white", overflow: "auto" }}
          position="fixed"
        >
          <Toolbar className={styles.toolbar}>
            <Box className={styles.header_left}>
              <Box className={styles.link}>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  className={styles.icons}
                >
                  <Link to="/">
                    <HomeIcon
                      fontSize="large"
                      style={{ color: "#127c71" }}
                    ></HomeIcon>
                  </Link>
                </Typography>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  className={styles.iconsmobile}
                >
                  <Link to="/viewjobs">
                    <BusinessCenterIcon
                      fontSize="large"
                      style={{ color: "#127c71" }}
                    ></BusinessCenterIcon>
                  </Link>
                </Typography>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  className={styles.iconsmobile}
                >
                  <Link to="/companies">
                    <AssignmentTurnedInIcon
                      fontSize="large"
                      style={{ color: "#127c71" }}
                    ></AssignmentTurnedInIcon>
                  </Link>
                </Typography>

                <Link style={{ textDecoration: "none" }} to="/viewjobs">
                  <Typography
                    sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
                    className={styles.typography}
                  >
                    Find Jobs
                  </Typography>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/companies">
                  <Typography
                    // sx={{ fontSize: "1.2rem" }}
                    sx={{ fontSize: "1.2rem" }}
                    className={styles.typography}
                  >
                    Company Reviews
                  </Typography>
                </Link>
              </Box>
            </Box>
            <Box className={styles.header_right}>
              {isAuth ? (
                <UserMenu />
              ) : (
                <Link to="/login">
                  <Typography
                    sx={{ fontSize: "1.2rem" }}
                    className={[styles.typography]}
                  >
                    Login
                  </Typography>
                  <Typography className={styles.iconsmobile}>
                    <LoginIcon
                      fontSize="large"
                      style={{ color: "#127c71" }}
                    ></LoginIcon>
                  </Typography>
                </Link>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
