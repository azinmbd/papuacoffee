import React, { useState } from "react";

import { Tab, Tabs } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CoffeeMakerOutlinedIcon from "@mui/icons-material/CoffeeMakerOutlined";
import CoffeeOutlinedIcon from "@mui/icons-material/CoffeeOutlined";
import StyleOutlinedIcon from "@mui/icons-material/StyleOutlined";
import Pic1 from "../assets/aboutus-pic1.png";
import Pic2 from "../assets/aboutus-pic2.png";
import Pic3 from "../assets/aboutus-pic3.png";

export default function AboutUsSection() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <Grid
      container
      component="main"
      sx={{ bgcolor: "custom.milk" }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Container
        sx={{
          pt: 4,
          pb: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        maxWidth="xl"
        data-aos="fade-down"
        data-aos-duration="2000"
        data-aos-delay="200"
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Tabs value={tabIndex} onChange={handleTabChange}>
              <Tab
                label="Need to use with Coffee Maker?"
                icon={<CoffeeMakerOutlinedIcon sx={{ fontSize: "40px" }} />}
                iconPosition="start"
              />
              <Tab
                label="Differetn types samples"
                iconPosition="start"
                icon={<CoffeeOutlinedIcon sx={{ fontSize: "40px" }} />}
              />
              <Tab
                label="Free sample subscription"
                iconPosition="start"
                icon={<StyleOutlinedIcon sx={{ fontSize: "40px" }} />}
              />
            </Tabs>
          </Box>
          <Box sx={{ padding: 2 }}>
            {tabIndex === 0 && (
              <Box>
                <Grid
                  container
                  component="main"
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  <Grid
                    item
                    xs={12}
                    sm={8}
                    md={6}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="h4"
                      data-aos="fade-down"
                      data-aos-duration="2000"
                      data-aos-delay="200"
                      sx={{ mb: 3 }}
                    >
                      <b>
                        WE ARE PROUD TO SUPPORT AND IMPROVE THE LIVELIHOODS OF
                        SMALL, SUSTAINABLE AND SPECIALITY FARMS
                      </b>
                      <br />
                    </Typography>
                    <Typography
                      data-aos="fade-right"
                      data-aos-duration="2000"
                      data-aos-delay="400"
                    >
                      We work closely with farms worldwide to make sure that
                      coffee farmers are paid a fair price, and maintain long
                      term relationships to provide the stability needed to plan
                      for the future. For almost all of our coffees, we can
                      pinpoint exactly where your cherries were picked within
                      the farm. For all other coffees, we can tell you which
                      co-operative they work with and why we are proud to be
                      involved.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={8} md={6}>
                    <img
                      data-aos="fade-left"
                      data-aos-duration="2000"
                      data-aos-delay="200"
                      src={Pic1}
                      alt=""
                      width={"100%"}
                    />
                  </Grid>
                </Grid>
              </Box>
            )}
            {tabIndex === 1 && (
              <Box>
                <Grid
                  container
                  component="main"
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  <Grid item xs={12} sm={8} md={6}>
                    <img
                      data-aos="fade-right"
                      data-aos-duration="2000"
                      data-aos-delay="200"
                      src={Pic2}
                      alt=""
                      width={"100%"}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={8}
                    md={6}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    data-aos-delay="200"
                  >
                    {" "}
                    <Typography
                      variant="h4"
                      data-aos="fade-down"
                      data-aos-duration="2000"
                      data-aos-delay="200"
                      sx={{ mb: 3 }}
                    >
                      <b>
                        WOGAN COFFEE IS NOW IN ITS III GENERATION, HAND-ROASTED
                        IN BRISTOL
                      </b>
                      <br />
                    </Typography>
                    <Typography>
                      A wholly independent family company, you can find us
                      rooted in Bristol, where the bowler-hatted Mr Wogan
                      established the business over fifty years ago. Today, we
                      not only roast great coffee, but also focus on
                      sustainability, making it this generations pledge to be
                      Carbon Neutral by 2030.
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            )}
            {tabIndex === 2 && (
              <Box>
                <Grid
                  container
                  component="main"
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  <Grid
                    item
                    xs={12}
                    sm={8}
                    md={6}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="h4"
                      data-aos="fade-down"
                      data-aos-duration="2000"
                      data-aos-delay="200"
                      sx={{ mb: 3 }}
                    >
                      <b>SAVE 10% ON ALL SUBSCRIPTION ORDERS!</b>
                      <br />
                    </Typography>
                    <Typography
                      data-aos="fade-right"
                      data-aos-duration="2000"
                      data-aos-delay="200"
                    >
                      Get 10% off and FREE shipping on all recurring orders by
                      entering code 'freeshipping' at checkout. Flexible
                      monthly, fortnightly or weekly plans. Paused, skipped,
                      stopped or rescheduled at any time. Choose your own,
                      receive our monthly favourites, or take the quiz.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={8} md={6}>
                    {" "}
                    <img
                      data-aos="fade-left"
                      data-aos-duration="2000"
                      data-aos-delay="200"
                      src={Pic3}
                      alt=""
                      width={"100%"}
                    />
                  </Grid>
                </Grid>
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </Grid>
  );
}
