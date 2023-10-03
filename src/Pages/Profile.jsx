import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import { Box, Button } from "@mui/material";
import { Tab, Tabs } from "@mui/material";
import { useSelector } from "react-redux";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import CardMedia from "@mui/material/CardMedia";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

const Profile = () => {
  let navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const orderSummary = useSelector((state) => state.allCart.orders);
  const refreshToken = useSelector((state) => state.auth.refreshToken);
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };
  const handleShop = (e) => {
    e.preventDefault();
    navigate("/products");
  };
  useEffect(() => {
    if (!refreshToken) {
      return navigate("/signin");
    }
  }, [refreshToken, navigate]);
  const renderList = () => {
    return (
      <List sx={{ width: "100%" }}>
        {orderSummary.map((array, index) => (
          <Box key={index} sx={{ mt: 5, bgcolor: "#ffffff7a" }}>
            <Typography variant="h6" sx={{ ml: 2, pt: 3 }}>
              <b>Order #{index + 1}</b>
            </Typography>

            {array.map((data, i) => (
              <div>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <CardMedia
                      component="img"
                      sx={{ width: "70px" }}
                      image={data.image}
                      src={data.image}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={data.product_name}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Price: {data.price}
                        </Typography>
                        <Typography     
                          variant="body2">Amount: {data.qty}</Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </div>
            ))}
          </Box>
        ))}
      </List>
    );
  };
  return (
    <React.Fragment>
      <Grid
        container
        component="main"
        sx={{ minHeight: "100vh" }}
        className="profileBg"
      >
        <Container
          maxWidth="md"
          sx={{
            backgroundColor: "custom.milk",
            p: 5,
            mt: 15,
            mb: 15,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Tabs value={tabIndex} onChange={handleTabChange}>
              <Tab
                label="Information"
                icon={<PersonOutlineOutlinedIcon sx={{ fontSize: "40px" }} />}
                iconPosition="start"
              />
              <Tab
                label="My Orders"
                iconPosition="start"
                icon={<LocalMallOutlinedIcon sx={{ fontSize: "40px" }} />}
              />
            </Tabs>
          </Box>
          <Box sx={{ width: "100%", mt: 5 }}>
            {tabIndex === 0 && (
              <Grid
                container
                component="main"
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid
                  item
                  xs={12}
                  sm={8}
                  md={12}
                  elevation={6}
                  alignItems="center"
                  justifyContent="center"
                  display={"flex"}
                  flexDirection={"column"}
                  boxShadow={"none"}
                >
                  <Box>
                    <Avatar
                      data-aos="fade-right"
                      data-aos-duration="2000"
                      data-aos-delay="0"
                      sx={{ width: 150, height: 150, mr: 2, mb: 3 }}
                    />
                  </Box>
                  <Typography
                    component="h4"
                    variant="h4"
                    color="black"
                    textAlign={"center"}
                    gutterBottom
                    data-aos="fade-down"
                    data-aos-duration="2000"
                    data-aos-delay="200"
                  >
                    Welcome {user.first_name} {user.last_name}!
                  </Typography>
                  <Typography
                    component="h6"
                    variant="h6"
                    color="black"
                   
                    gutterBottom
                    data-aos="fade-down"
                    data-aos-duration="2000"
                    data-aos-delay="200"
                  >
                    {" "}
                    Your Personal Information:
                  </Typography>
                  <TextField
                    disabled
                    id="filled-basic"
                    label="First Name:"
                    defaultValue={user.first_name}
                    sx={{ mb: 2, width: "90%" }}
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-delay="200"
                  />
                  <TextField
                    disabled
                    id="filled-basic"
                    label="Last Name:"
                    defaultValue={user.last_name}
                    sx={{ mb: 2, width: "90%" }}
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-delay="400"
                  />
                  <TextField
                    disabled
                    id="filled-basic"
                    label="Email"
                    sx={{ width: "90%" }}
                    defaultValue={user.email}
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-delay="600"
                  />
                </Grid>
     
              </Grid>
            )}
            {tabIndex === 1 && (
              <Grid
                container
                component="main"
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {orderSummary.length !== 0 ? (
                  renderList()
                ) : (
                  <Box sx={{ width: "100% ", textAlign: "center" }}>
                    <Typography
                      component="h4"
                      variant="h4"
                      color="black"
                      textAlign={"center"}
                      gutterBottom
                      data-aos="fade-down"
                      data-aos-duration="2000"
                      data-aos-delay="200"
                    >
                      Your Order List is empty!
                    </Typography>
                    <Button
                      sx={{ bgcolor: "secondary.main" }}
                      variant="contained"
                      size="large"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                      data-aos-delay="500"
                      onClick={handleShop}
                    >
                      View Products
                    </Button>
                  </Box>
                )}
              </Grid>
            )}
          </Box>
        </Container>
      </Grid>
    </React.Fragment>
  );
};
export default Profile;
