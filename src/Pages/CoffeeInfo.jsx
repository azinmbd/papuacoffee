import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
import { getCartTotal } from "../redux/features/cartSlice";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const CoffeeInfo = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const { cart } = useSelector((state) => state.allCart);
  //coffee list
  const { coffeeInfo } = useSelector((state) => state);
  const handleClick = () => {
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
  }, [cart, dispatch, coffeeInfo]);
  return (
    <Grid
      container
      component="main"
      className="loopImg"
      sx={{ pt: 8, bgcolor: "custom.milk", height: "100vh" }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
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
        <Box
          sx={{
            backgroundColor: "#ffffffbd",
            width: "75%",
            display: "flex",
            justifyContent: "space-between",
            minHeight: "60%",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "35px",
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="0"
          >
            {coffeeInfo.data.product_name}
          </Typography>
          <Typography
            variant="h4"
            gutterBottom
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="200"
          >
            ${coffeeInfo.data.price}
          </Typography>
          <Typography
            variant="h5"
            paragraph
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="400"
          >
            {coffeeInfo.data.description}
          </Typography>
          <Button
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="600"
            size="large"
            className="productInfoBtn"
            sx={{ bgcolor: "#F7C04A", color: "black" }}
            onClick={() => {
              dispatch(addToCart(coffeeInfo.data));
              handleClick();
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <img
          src={coffeeInfo.data.image}
          width="80%"
          alt=""
          data-aos="fade-down"
          data-aos-duration="2000"
          data-aos-delay="0"
        />
      </Grid>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert
            onClick={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Item added to your cart!
          </Alert>
        </Snackbar>
      </Stack>
    </Grid>
  );
};

export default CoffeeInfo;
