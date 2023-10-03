import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import bg from "../assets/404bg.jpg";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Grid
      container
      component="main"
      sx={{
        pt: 8,
        bgcolor: "secondary.main",
        minHeight: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundColor: (t) =>
          t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <CssBaseline />
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        elevation={6}
        className="FisrtSectionbg"
        alignItems="center"
        justifyContent="center"
        display={"flex"}
        boxShadow={"none"}
      ></Grid>

      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        elevation={6}
        className="FisrtSectionbg"
        alignItems="center"
        justifyContent="center"
        display={"flex"}
        boxShadow={"none"}
      >
        <Box>
          <Typography variant="h1">404</Typography>
          <Typography variant="h6">
            The page you’re looking for doesn’t exist.
          </Typography>
          <Button
            variant="contained"
            sx={{ bgcolor: "secondary.main" }}
            onClick={(e) =>{
              e.preventDefault() 
              navigate(-1)}}
          >
            Back To Previous Page
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
