import React from "react";

import { Button, Container, Stack, Box, Typography } from "@mui/material";
import { RippleBadge } from "./MaterialTheme/styled";
import "../css/app.css";

function App() {
  return (
    <Container sx={{ background: "orange" }}>
      <Stack flex-direction={"column"}>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component={"h1"}>
            Create React App on Typescript with Redux
          </Typography>
        </Box>
        <Box>
          <RippleBadge badgeContent={4}>
            <Button variant="contained">Contained</Button>
          </RippleBadge>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
