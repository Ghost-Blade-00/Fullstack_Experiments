// exp-2.3.jsx

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Card,
  CardContent,
  TextField,
  Button,
  Box
} from "@mui/material";

function Exp23() {
  return (
    <>
      {/* App Bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Experiment-3: Material UI Design
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              User Registration
            </Typography>

            <Typography variant="body2" color="text.secondary" gutterBottom>
              Design a simple UI using Material UI components in React.
            </Typography>

            <Box component="form" sx={{ mt: 2 }}>
              <TextField
                fullWidth
                label="Name"
                margin="normal"
              />

              <TextField
                fullWidth
                label="Email"
                type="email"
                margin="normal"
              />

              <TextField
                fullWidth
                label="Password"
                type="password"
                margin="normal"
              />

              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Submit
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default Exp23;
