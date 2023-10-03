import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ProgressBar from "react-animated-progress-bar";

const AboutUsProgressBar = () => {
  return (
    <Container maxWidth="xl">
      <Grid
        container
        component="main"
        sx={{ pt: 10 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid
          item
          xs={12}
          sm={8}
          md={12}
          elevation={6}

        >
          <Typography
            component="h1"
            variant="h2"
            color="black"
            gutterBottom
            textAlign={"center"}
            width={"100%"}
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-delay="200"
          >
            <b>OUR SUSTAINABLE PLEDGE</b>
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        component="main"
        sx={{ pt: 2, pb: 10 }}
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
          <Box
            width={"100%"}

          >
            <Typography component="p" variant="p" color="black" gutterBottom>
              Quality
            </Typography>
            <ProgressBar
              width="80%"
              height="10px"
              rect
              fontColor="gray"
              percentage="99"
              rectPadding="1px"
              rectBorderRadius="20px"
              trackPathColor="transparent"
              bgColor="#ffffff"
              trackBorderColor="grey"
            />
          </Box>

          <br />
          <Box
            width={"100%"}
   
          >
            <Typography component="p" variant="p" color="black" gutterBottom>
              Shipping Quality
            </Typography>
            <ProgressBar
              width="80%"
              height="10px"
              rect
              fontColor="gray"
              percentage="75"
              rectPadding="1px"
              rectBorderRadius="20px"
              trackPathColor="transparent"
              bgColor="#ffffff"
              trackBorderColor="grey"
            />
          </Box>
          <br />
          <Box
            width={"100%"}

          >
            <Typography component="p" variant="p" color="black" gutterBottom>
              Roasting Quality
            </Typography>
            <ProgressBar
              width="80%"
              height="10px"
              rect
              fontColor="gray"
              percentage="90"
              rectPadding="1px"
              rectBorderRadius="20px"
              trackPathColor="transparent"
              bgColor="#ffffff"
              trackBorderColor="grey"
            />
          </Box>
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
          <Box
            width={"100%"}
 
          >
            <Typography component="p" variant="p" color="black" gutterBottom>
              Customer Reviews
            </Typography>
            <ProgressBar
              width="90%"
              height="10px"
              rect
              fontColor="gray"
              percentage="88"
              rectPadding="1px"
              rectBorderRadius="20px"
              trackPathColor="transparent"
              bgColor="#ffffff"
              trackBorderColor="grey"
            />
          </Box>
          <br />
          <Box
            width={"100%"}
       
          >
            <Typography component="p" variant="p" color="black" gutterBottom>
              Packing Quality
            </Typography>
            <ProgressBar
              width="90%"
              height="10px"
              rect
              fontColor="gray"
              percentage="79"
              rectPadding="1px"
              rectBorderRadius="20px"
              trackPathColor="transparent"
              bgColor="#ffffff"
              trackBorderColor="grey"
            />
          </Box>
          <br />
          <Box
            width={"100%"}
 
          >
            <Typography component="p" variant="p" color="black" gutterBottom>
              Packing Quality
            </Typography>
            <ProgressBar
              width="90%"
              height="10px"
              rect
              fontColor="gray"
              percentage="79"
              rectPadding="1px"
              rectBorderRadius="20px"
              trackPathColor="transparent"
              bgColor="#ffffff"
              trackBorderColor="grey"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default AboutUsProgressBar;
