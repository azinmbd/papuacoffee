import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Carousel from "react-multi-carousel";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import { useNavigate } from "react-router-dom";
import MuiAlert from "@mui/material/Alert";
import { getCartTotal } from "../redux/features/cartSlice";
import { fetchCoffee } from "../redux/features/coffeeSlice";
import { fetchCoffeeInfo } from "../redux/features/coffeeInfoSlice";
//new code

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function HomePageCarosel(props) {
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

  const handleCoffeeInfo = (id) => {
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
  //new code
  return (
    <Container
      maxWidth="xl"
      data-aos="fade-down"
      data-aos-duration="2000"
      data-aos-delay="200"
      sx={{ marginBottom: "30px" }}
    >
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
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all 1"
        transitionDuration={3000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
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
                height: "100%",
                display: "flex",
                flexDirection: "column",
                margin: "10px",
              }}
              className="productsCard"
            >
              <CardMedia
                component="img"
                sx={{ width: "70% !important" }}
                image={item.image}
                alt="random"
                className="cardMedia"
                onClick={() => handleCoffeeInfo(item._id)}
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
      </Carousel>
    </Container>
  );
}
