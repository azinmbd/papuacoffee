import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { useNavigate } from "react-router-dom";
import MuiAlert from "@mui/material/Alert";
import { getCartTotal } from "../redux/features/cartSlice";
import { fetchCoffee } from "../redux/features/coffeeSlice";
import { fetchCoffeeInfo } from "../redux/features/coffeeInfoSlice";
import Footer from "../components/Footer";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
//new code

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Products = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { cart } = useSelector((state) => state.allCart);
  const [addedItems, setAddedItems] = useState([]);
  const [open, setOpen] = React.useState(false);
  //
  const delay = 200;
  //coffee list
  const data = useSelector((state) => state.coffee.data);

  const handleClick = () => {
    setOpen(true);
  };

  const handleCoffeeInfo = (e, id) => {
    e.preventDefault();
    navigate(`/products/${id}`);
    dispatch(fetchCoffeeInfo(id));
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  useEffect(() => {
    setAddedItems(
      data
        .filter((sample2Entry) =>
          cart.some((sample1Entry) => sample1Entry._id === sample2Entry._id)
        )
        .map((sample2Entry) => sample2Entry._id)
    );
    dispatch(getCartTotal());
    dispatch(fetchCoffee());
  }, [cart, data, dispatch]);

  return (
    <React.Fragment>
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
      <Container maxWidth="xl">
        <Grid container component="main" sx={{ mt: "100px" }}>
          {" "}
          {data?.map((item, i) => (
            <Grid
              item
              key={item._id}
              xs={12}
              sm={6}
              md={4}
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-delay={delay * i * 2}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "10px",
                }}
                className="productItems"
              >
                <CardMedia
                  component="img"
                  sx={{ width: "70% !important" }}
                  image={item.image}
                  alt="random"
                  className="cardMedia"
                  onClick={(e) => handleCoffeeInfo(e, item._id)}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.product_name}
                  </Typography>
                  <Typography>{item.description}</Typography>
                  <Typography gutterBottom variant="h5" component="h4">
                    ${item.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  {addedItems.includes(item._id) ? (
                    <Button
                      size="medium"
                      sx={{
                        bgcolor: "white",
                        color: "black",
                        boxShadow: "0 2px 15px rgb(0 0 0 / 40%)",
                      }}
                      className="addtocartbtn"
                      onClick={() => {
                        dispatch(addToCart(item));
                        handleClick();
                      }}
                    >
                      <AddBoxOutlinedIcon />
                      Add More
                    </Button>
                  ) : (
                    <Button
                      size="medium"
                      sx={{ bgcolor: "custom.yellow", color: "black" }}
                      className="addtocartbtn"
                      onClick={() => {
                        dispatch(addToCart(item));
                        handleClick();
                      }}
                    >
                      Add to Cart
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Products;
