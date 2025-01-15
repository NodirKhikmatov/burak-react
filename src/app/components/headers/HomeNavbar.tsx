import { Container, Box, Stack, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";

export default function HomeNavbar() {
  const authMember = null;
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
            <Basket />
            {!authMember ? (
              <Box>
                <Button variant="contained" className="login-button">
                  Login
                </Button>
              </Box>
            ) : (
              <img
                className="user-avatar"
                src="/icons/default-user.svg"
                aria-haspopup={"true"}
              />
            )}
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
              {" "}
              {!authMember ? (
                <Button variant="contained" className={"signup-button"}>
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
