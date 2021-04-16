import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Tooltip,
} from "@material-ui/core";
import { Menu as MenuIcon, ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/commerce.png";
import useStyles from "./styles";
import { useState } from "react";
import { SidebarData } from "../Sidebar/SidebarData";
import "./Navbar.css";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();
  const [sidebar, setSidebar] = useState(false);

  const showSideBar = () => setSidebar(!sidebar);

  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
          <Typography
            component={Link}
            to='/'
            variant='h6'
            className={classes.title}
            color='inherit'
          >
            {/* <div className='navbar'>
              <Tooltip title='Menu'>
                <MenuIcon onClick={showSideBar} />
              </Tooltip>
            </div> */}
            <img
              src={logo}
              alt='Commerce.js'
              height='25px'
              className={classes.image}
            />
            Commerce.js
          </Typography>
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to='/cart'
                aria-label='Show cart items'
                color='inherit'
              >
                <Badge badgeContent={totalItems} color='secondary'>
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
      {/* <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className='nav-menu-items'>
          <br />
          <br />
          <br />
          <br />
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.className}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav> */}
    </>
  );
};

export default Navbar;
