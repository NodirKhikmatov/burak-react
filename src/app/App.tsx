import React from "react";

import { Button, Container, Stack, Box, Typography } from "@mui/material";
import "../css/app.css";

function App() {
  return (
    <Container max-width="sm">
      <Stack flex-direction={"column"}>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component={"h1"}>
            Create React App on Typescript with Redux
          </Typography>
        </Box>
        <Button variant="contained">Contained</Button>;
      </Stack>
    </Container>
  );
}

export default App;
