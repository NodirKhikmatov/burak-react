import { Container, Box, Stack, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
export function HomeNavbar() {
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
              </NavLink>{" "}
            </Box>
            <Box className="home-line">
              <NavLink to="/products" activeClassName="underline">
                Products
              </NavLink>{" "}
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
            {/** basket */}
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
        <Stack>Details </Stack>
      </Container>
    </div>
  );
}
