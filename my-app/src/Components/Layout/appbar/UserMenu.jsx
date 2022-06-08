import FaceIcon from "@mui/icons-material/Face";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { IconButton, Typography } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../../Redux/Login/actions";

const StyledMenu = (props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
);

const StyledMenuItem = MenuItem;

export default function UserMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();
  const loggedUser = useSelector((state) => state.login.loggedUser);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={handleClick}
        size="large"
      >
        <FaceIcon fontSize="large" style={{ color: "#127c71" }} />
      </IconButton>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Typography
          variant={"h5"}
          style={{ fontSize: "20px", marginLeft: "15px" }}
        >
          {loggedUser.name}
        </Typography>
        <StyledMenuItem
          onClick={() => {
            handleClose();
            history.push("/savedjobs");
          }}
        >
          <ListItemIcon>
            <FavoriteIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="My Jobs" />
        </StyledMenuItem>
        <StyledMenuItem
          onClick={() => {
            handleClose();
            dispatch(logout());
          }}
        >
          <ListItemIcon>
            <PowerSettingsNewIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Sign Out" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
