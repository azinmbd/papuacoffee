import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Footer from "../components/Footer";
import HomeFirstSection from "../components/HomeFirstSection";
import { useSelector, useDispatch } from "react-redux";
import AboutUsSection from "../components/AboutUsSection";
import HomePageCarosel from "../components/HomePageCarosel";
//new code
import { getCartTotal } from "../redux/features/cartSlice";
//new code

const Home = () => {
  const dispatch = useDispatch();
  //new code
  const { cart } = useSelector((state) => state.allCart);
  // const user = useSelector((state) => state);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);
  //new code

  return (
    <React.Fragment>
      <HomeFirstSection />
      <Container
        sx={{ pt: 8 }}
        maxWidth="xl"
        data-aos="fade-down"
        data-aos-duration="2000"
        data-aos-delay="200"
      >
        <Typography
          color="black"
          variant="h3"
          sx={{ mt: 3, textTransform: "uppercase", textAlign: "center" }}
        >
          <b>Our Samples</b>
          <span className="line"></span>
        </Typography>
      </Container>
      <HomePageCarosel />
      <AboutUsSection />
      <Footer />
    </React.Fragment>
  );
};
export default Home;
