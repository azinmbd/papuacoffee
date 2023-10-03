import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { getCartTotal } from "../redux/features/cartSlice";
import { submitOrder } from "../redux/features/cartSlice";

import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CartSummary() {
  const dispatch = useDispatch();
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const handleOrder = (e) => {
    e.preventDefault();
    dispatch(submitOrder(cart));
  };
  const showNotification =()=>{
    setTimeout(
      () => (
        <Alert severity="success" sx={{ mt: 4 }}>
          Your order Was Submitted!!
        </Alert>
      ),
      600
    );
  }
  const refreshToken = useSelector((state) => state.auth.refreshToken);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);
  return (
    <Box
      className="mobilemt5"
      sx={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        boxShadow: "0 2px 10px rgba(0,0,0,.1)",
        bgcolor: "white",
        p: 3,
      }}
    >
      <Typography
        color="black"
        variant="h5"
        sx={{
          textTransform: "uppercase",
          mb: 2,
          width: "100%",
          borderBottom: "2px solid #539165",
        }}
      >
        Summary
      </Typography>
      <Box
        data-aos="fade-down"
        data-aos-duration="2000"
        data-aos-delay="200"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          mb: 2,
        }}
      >
        <Typography color="black" variant="p">
          Total Quantity
        </Typography>
        <Typography color="black" variant="p">
          {totalQuantity}
        </Typography>
      </Box>
      <Box
        data-aos="fade-down"
        data-aos-duration="2000"
        data-aos-delay="400"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          mb: 2,
        }}
      >
        <Typography color="black" variant="h6">
          Total amount
        </Typography>
        <Typography color="black" variant="h6">
          ${totalPrice}
        </Typography>
      </Box>
      {refreshToken ? (
        <Button
          variant="contained"
          size="large"
          data-aos="fade-down"
          data-aos-duration="2000"
          data-aos-delay="600"
          sx={{ bgcolor: "secondary.main" }}
          onClick={handleOrder}
        >
          Submit Order
        </Button>
      ) : (
        <NavLink
          className="nav-item siginBtn"
          to="/signIn"
          style={{ backgroundColor: "#F7C04A" }}
        >
          Sign In to continue
        </NavLink>
      )}
    </Box>
  );
}
