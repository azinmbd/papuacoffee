import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import introCoffee from "../assets/firstpic.png";
import {  useNavigate } from "react-router-dom";
export default function HomeFirstSection(props) {
  let navigate = useNavigate();
  const handleShop = (e) => {
    e.preventDefault();
    navigate("/products");
  };
  const handleAbout = (e) => {
    e.preventDefault();
    navigate("/aboutus");
  };
  return (
    <Grid
      container
      component="main"
      sx={{ pt: 8, bgcolor: "secondary.main" }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <CssBaseline />

      <Grid
        item
        xs={12}
        sm={8}
        md={8}
        elevation={6}
        className="FisrtSectionbg"
        alignItems="center"
        justifyContent="center"
        display={"flex"}
        boxShadow={"none"}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="0"
        >
          <Container maxWidth="md">
            <Typography component="h1" variant="h2" color="white" gutterBottom>
              <b>GREAT</b> COFFEE
              <br />
              DOESN'T HAVE TO <br /> <b>COST THE EARTH</b>
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph>
              Since 1970, our family has been on a mission to provide
              sustainable and ethical, hand-roasted, speciality coffee, at a
              fair price for you and the farmers.
            </Typography>
            <Stack sx={{ pt: 4 }} direction="row" spacing={2}>
              <Button
                variant="contained"
                size="large"
                className="mainbtn"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="500"
                onClick={handleShop}
              >
                Shop Now
              </Button>
              <Button
                variant="outlined"
                size="large"
                className="secondbtn"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="1000"
                onClick={handleAbout}
              >
                About Us{" "}
              </Button>
            </Stack>
          </Container>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <img
          src={introCoffee}
          width="90%"
          alt=""
          data-aos="fade-down"
          data-aos-duration="2000"
          data-aos-delay="0"
        />
      </Grid>
    </Grid>
  );
}
