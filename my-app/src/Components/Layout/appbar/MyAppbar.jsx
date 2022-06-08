import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./MyAppbar.module.css";
import UserMenu from "./UserMenu";
export default function MyAppbar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar elevation={0} style={{ background: "white" }} position="static">
          <Toolbar className={styles.toolbar}>
            <Box className={styles.header_left}>
              <Box className={styles.link}>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  className={styles.typography}
                >
                  <Link to="/login">
                    <BusinessCenterIcon
                      fontSize="large"
                      style={{ color: "#127c71" }}
                    ></BusinessCenterIcon>
                  </Link>
                </Typography>
                <Link style={{ textDecoration: "none" }} to="/">
                  <Typography
                    sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
                    className={styles.typography}
                  >
                    Find Jobs
                  </Typography>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/companies">
                  <Typography
                    sx={{ fontSize: "1.2rem" }}
                    className={styles.typography}
                  >
                    Company Reviews
                  </Typography>
                </Link>
              </Box>
            </Box>
            <Box className={styles.header_right}>
              <UserMenu></UserMenu>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
