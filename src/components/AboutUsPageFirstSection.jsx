import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import aboutUsIntro from "../assets/about us.png";

const AboutUsPageFirstSection = () => {
  return (
    <Grid container component="main" sx={{ bgcolor: "custom.orange" }}>
      <Container maxWidth="xl">
        <Grid
          container
          component="main"
          sx={{ mt: 15 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            elevation={6}
            alignItems="center"
            justifyContent="center"
            display={"flex"}
            flexDirection={"column"}
            boxShadow={"none"}
          >
            <Typography
              component="h1"
              variant="h2"
              color="black"
              gutterBottom
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-delay="200"
            >
              <b>HAND-ROASTED</b> <br />
              COFFEE, MADE BY OUR FAMILY FOR <br />
              <b> III GENERATIONS</b>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              data-aos="fade-left"
              data-aos-duration="2000"
              data-aos-delay="0"
              src={aboutUsIntro}
              alt=""
              width="100%"
            />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default AboutUsPageFirstSection;
