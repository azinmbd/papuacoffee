import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import {
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../redux/features/cartSlice";
import { styled } from "@mui/material/styles";
import CartSummary from "../components/CartSummary";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { NavLink } from "react-router-dom";

const StyledButtonGroup = styled(ButtonGroup)({
  "& .MuiButtonGroup-grouped": {
    borderColor: "#539165",
  },
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const CartPage = () => {
  const { cart } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const delay = 200;
  const handleClick = (qty) => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  return cart?.length !== 0 ? (
    <Box sx={{ pt: 8, bgcolor: "custom.milk", minHeight: "100vh" }}>
      <Container maxWidth="xl">
        <Grid
          container
          component="main"
          sx={{ pt: 8 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              boxShadow: "0 2px 10px rgba(0,0,0,.1)",
              bgcolor: "white",
              p: 3,
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "self-start",
              }}
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-delay="0"
            >
              <Box
                sx={{ mb: 2, width: "100%", borderBottom: "2px solid #539165" }}
              >
                <Typography
                  color="black"
                  variant="h5"
                  sx={{ textTransform: "uppercase" }}
                >
                  Products: {cart.length}
                </Typography>
              </Box>

              {cart?.map((data, i) => (
                <Card
                  sx={{
                    display: "flex",
                    p: 3,
                    boxShadow: "none",
                    borderBottom: "1px solid gray",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                  key={data._id}
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-delay={delay * i * 2}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: "150px" }}
                    image={data.image}
                  />
                  <Box sx={{ width: "50% " }}>
                    {" "}
                    <Typography gutterBottom variant="h5" component="h5">
                      {data.product_name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h6">
                      ${data.price}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      <StyledButtonGroup>
                        <Button
                          size="small"
                          sx={{ color: "secondary.main" }}
                          aria-label="reduce"
                          onClick={() => {
                            dispatch(decreaseItemQuantity(data._id));
                            handleClick(data.qty);
                          }}
                        >
                          <RemoveIcon fontSize="small" />
                        </Button>
                        <Button
                          size="small"
                          sx={{ color: "secondary.main" }}
                          aria-label="increase"
                          onClick={() =>
                            dispatch(increaseItemQuantity(data._id))
                          }
                        >
                          <AddIcon fontSize="small" />
                        </Button>
                        <Button
                          size="small"
                          sx={{ color: "custom.gray" }}
                          className="removerFromCart"
                          onClick={() => {
                            dispatch(removeItem(data._id));
                            handleClick(data.qty);
                          }}
                        >
                          <DeleteForeverOutlinedIcon />
                        </Button>
                      </StyledButtonGroup>
                      <Typography variant="h6" pl={3}>
                        {data.qty}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={2}></Grid>
          <Grid item xs={12} sm={12} md={4}>
            <CartSummary />
            <Stack spacing={2} sx={{ width: "100%" }}>
              <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
              >
                <Alert
                  onClick={handleClose}
                  severity="error"
                  sx={{ width: "100%" }}
                >
                  Item removed from your cart!
                </Alert>
              </Snackbar>
            </Stack>
          </Grid>{" "}
        </Grid>
      </Container>
    </Box>
  ) : (
    <Box
      sx={{ pt: 8, bgcolor: "custom.milk", minHeight: "100vh" }}
      className="emptyCart"
    >
      <Container maxWidth="xl">
        <Grid
          container
          component="main"
          sx={{ pt: 8 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {" "}
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 3,
            }}
          >
            {" "}
            <Typography
              gutterBottom
              textAlign="center"
              variant="h2"
              component="h2"
            >
              Your Cart is Empty try to add some products.
            </Typography>
            <NavLink to="/products">
              <Button
                variant="contained"
                size="large"
                data-aos="fade-down"
                data-aos-duration="2000"
                data-aos-delay="600"
                sx={{ bgcolor: "secondary.main" }}
              >
                View Products
              </Button>
            </NavLink>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CartPage;
