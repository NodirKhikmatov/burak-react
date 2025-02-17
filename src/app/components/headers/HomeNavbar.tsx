import {
  Container,
  Box,
  Stack,
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import { Logout } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import React, { useState, useEffect } from "react";
import { CartItem } from "../../../lib/types/search";
import { useGlobals } from "../../Hooks/useGlobal";
import { serverApi } from "../../../lib/config";

interface HomeNavbarProps {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
  setSignupOpen: (isOpen: boolean) => void;
  setLoginOpen: (isOpen: boolean) => void;
  handleLogoutClick: (e: React.MouseEvent<HTMLElement>) => void;
  anchorEl: HTMLElement | null;
  handleCloseLogout: () => void;
  handleLogoutRequest: () => void;
}

export default function HomeNavbar(props: HomeNavbarProps) {
  const {
    cartItems,
    onAdd,
    onRemove,
    onDelete,
    onDeleteAll,
    setLoginOpen,
    setSignupOpen,
    handleLogoutClick,
    handleCloseLogout,
    anchorEl,
    handleLogoutRequest,
  } = props;

  const { authMember } = useGlobals();
  return (
    <div className="home-navbar">
      <Container className="navbar-container">
        <Stack className="menu">
          <Box className="home-line">
            <NavLink to="/" activeClassName="underline">
              <img className="brand-logo" src="/icons/burak.svg" />
            </NavLink>
          </Box>
          <Stack className="links">
            <Box className="home-line">
              <NavLink to="/" activeClassName="underline">
                Home
              </NavLink>
            </Box>
            <Box className="home-line">
              <NavLink to="/products" activeClassName="underline">
                Products
              </NavLink>
            </Box>
            {authMember ? (
              <Box className="home-line">
                <NavLink to="/orders" activeClassName="underline">
                  Orders
                </NavLink>{" "}
              </Box>
            ) : null}
            {authMember ? (
              <Box className="home-line">
                <NavLink to="/members-page" activeClassName="underline">
                  My page
                </NavLink>{" "}
              </Box>
            ) : null}
            <Box className="home-line">
              <NavLink to="/help" activeClassName="underline">
                Help
              </NavLink>
            </Box>
            <Basket
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              onDelete={onDelete}
              onDeleteAll={onDeleteAll}
            />
            {!authMember ? (
              <Box>
                <Button
                  variant="contained"
                  className="login-button"
                  onClick={() => setLoginOpen(true)}
                >
                  Login
                </Button>
              </Box>
            ) : (
              <img
                className="user-avatar"
                src={
                  authMember?.memberImage
                    ? `${serverApi}/${authMember?.memberImage}`
                    : "/icons/default-user.svg"
                }
                aria-haspopup={"true"}
                onClick={handleLogoutClick}
              />
            )}

            <Menu
              id="account-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseLogout}
              onClick={handleCloseLogout}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleLogoutRequest}>
                <ListItemIcon>
                  <Logout fontSize="small" style={{ color: "blue" }} />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Stack>
        </Stack>
        <Stack className={"header-frame"}>
          <Stack className={"detail"}>
            <Box className={"head-main-txt "}>
              World's Most Delecious Cousine
            </Box>
            <Box className={"wel-txt"}>The Choice, not just a choice </Box>
            <Box className={"service-txt"}>24 hour service </Box>
            <Box className={"signup"}>
              {!authMember ? (
                <Button
                  variant="contained"
                  className={"signup-button"}
                  onClick={() => setSignupOpen(true)}
                >
                  SIGN UP
                </Button>
              ) : null}
            </Box>
          </Stack>
          <Stack className={"logo-frame"}>
            <div className={"logo-img"}></div>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
