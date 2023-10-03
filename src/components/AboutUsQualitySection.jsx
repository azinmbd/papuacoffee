import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import aboutUsBeans from "../assets/aboutus2.png";
const AboutUsQualitySection = () => {
  return (
    <Container maxWidth="xl">
      <Grid
        container
        component="main"
        sx={{ pt: 10, pb: 10 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          elevation={6}
          alignItems="flex-start"
          justifyContent="center"
          display={"flex"}
          flexDirection={"column"}
          boxShadow={"none"}
        >
          <img
            src={aboutUsBeans}
            alt=""
            width="80%"
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-delay="600"
          />

        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center ",
            flexDirection: "column",
          }}
        >
          <Typography
            component="h1"
            variant="h2"
            color="black"
            gutterBottom
            width={"100%"}
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-delay="200"
          >
            <b>OUR COFFEE</b>
          </Typography>
          <Typography
            component="p"
            variant="p"
            color="text.secondary"
            gutterBottom
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-delay="400"
          >
            Our ambition is to bring out the best in every bean that we import,
            and improve the quality and potential of speciality coffee - from
            cafés and restaurants, to enthusiastic home brewers, we want to give
            you the best coffee-drinking experience, and improve the lives of
            coffee farmers, producers and their families while we’re at it.
            <br />
            These relationships allow us to offer support every step of the way
            by ensuring that farmers are paid a fair price, and often work
            together to provide an extra subsidy to help with health, education,
            infrastructure and better equipment. On a business level, this
            encourages innovation and expansion, while providing them with the
            long term security and support that a relationship creates. On a
            personal level, it ensures a more sustainable and improved way of
            life for farmers and producers. As an added bonus, we receive
            frequent letters and updates from the farms that we work with, and
            the children that we support. We want you to be confident in the
            knowledge that the cup of coffee you are drinking is doing a world
            of good.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
export default AboutUsQualitySection;
