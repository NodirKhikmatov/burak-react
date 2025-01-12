import { Container, Box, Stack, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
export function HomeNavbar() {
  const authMember = null;
  return (
    <div className="home-navbar">
      <Container sx={{ mt: "55px", height: "642px" }}>
        <Stack
          sx={{ height: "50px" }}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box className="home-line">
            <NavLink to="/" activeClassName="underline">
              <img
                style={{ width: "125px", height: "30px" }}
                src="/icons/burak.svg"
              />{" "}
            </NavLink>
          </Box>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            minWidth={"700px"}
          >
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
                <Button
                  variant="contained"
                  style={{ background: "#3676CC", color: "#f8f8ff" }}
                >
                  Login
                </Button>
              </Box>
            ) : (
              <img />
            )}
          </Stack>
        </Stack>
        <Stack>Details </Stack>
      </Container>
    </div>
  );
}
