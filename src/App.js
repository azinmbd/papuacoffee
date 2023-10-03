import { Routes, Route, useParams } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import Home from "./Pages/Home";
import "./styles/app.scss";
import AOS from "aos";
import SignUp from "./Pages/SignUp";
import AuthHeader from "./components/AuthHeader";
import NoAuthHeader from "./components/NoAuthHeader";
import NotFound from "./Pages/NotFound";
import CoffeeInfo from "./Pages/CoffeeInfo";
import { useSelector } from "react-redux";
import Products from "./Pages/Products";
import AboutUs from "./Pages/AboutUs";
import CartPage from "./Pages/CartPage";
import Profile from "./Pages/Profile";

export default function App() {
  AOS.init({ once: true });
  const refreshToken = useSelector((state) => state.auth.refreshToken);
  // let { coffeeId } = useParams();
  return (
    <div>
      {refreshToken ? <AuthHeader /> : <NoAuthHeader />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/papuacoffee" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="products">
          <Route path=":coffeeId" element={<CoffeeInfo />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
