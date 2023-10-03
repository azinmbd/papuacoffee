import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import wlogo from "../assets/wlogo.svg";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { deleteToken } from "../redux/features/authSlice";
import { getCartTotal } from "../redux/features/cartSlice";

export default function Header() {
  const dispatch = useDispatch();
  const refreshToken = useSelector((state) => state.auth.refreshToken);
  const { cart, totalQuantity } = useSelector((state) => state.allCart);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(deleteToken(refreshToken));
  };
  const openNav = () => {
    document.getElementById("Sidenav").style.width = "100%";
  };

  const closeNav = () => {
    document.getElementById("Sidenav").style.width = "0";
  };
  return refreshToken ? (
    <React.Fragment>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "WHITE",
          zIndex: "10000",
          boxShadow: "0 2px 10px rgba(0,0,0,.1)",
        }}
        className="d-block-lg"
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <NavLink className="nav-item logo" to="/">
              <img src={logo} alt="" width={"80px"} />
            </NavLink>
            <div className="d-flex  w-70">
              <NavLink
                className="nav-item"
                to="/"
                style={({ isActive }) =>
                  isActive
                    ? { color: "#539165", borderBottom: " 3px solid" }
                    : undefined
                }
              >
                Home
              </NavLink>

              <NavLink
                className="nav-item"
                to="/products"
                style={({ isActive }) =>
                  isActive
                    ? { color: "#539165", borderBottom: " 3px solid" }
                    : undefined
                }
              >
                Products
              </NavLink>
              <NavLink
                className="nav-item"
                to="/aboutus"
                style={({ isActive }) =>
                  isActive
                    ? { color: "#539165", borderBottom: " 3px solid" }
                    : undefined
                }
              >
                About Us
              </NavLink>
            </div>{" "}
            <NavLink
              to="/profile"
              style={({ isActive }) =>
                isActive
                  ? { color: "#539165", borderBottom: " 3px solid" }
                  : undefined
              }
            >
              <div className="headerCartIcon">
                <PersonOutlineOutlinedIcon
                  className="cartIcon"
                  sx={{ color: "secondary.main", fontSize: "2.2em" }}
                />
              </div>
            </NavLink>
            <NavLink
              to="/cart"
              style={({ isActive }) =>
                isActive
                  ? { color: "#539165", borderBottom: " 3px solid" }
                  : undefined
              }
            >
              <div className="headerCartIcon">
                <LocalMallOutlinedIcon
                  className="cartIcon"
                  sx={{ color: "secondary.main", fontSize: "2em" }}
                />
                {totalQuantity !== 0 || totalQuantity !== NaN ? (
                  <span className="cartAmount">{totalQuantity}</span>
                ) : (
                  <span></span>
                )}
              </div>
            </NavLink>
            <NavLink
              className="nav-item siginBtn"
              // to="/signIn"
              style={{ backgroundColor: "#F7C04A" }}
              onClick={handleClick}
            >
              Sign Out
            </NavLink>{" "}
          </Toolbar>
        </Container>
      </AppBar>
      <nav className="mobile-menu d-flex-sm ">
        <div id="Sidenav" className="sidenav">
          <a href="#" className="closebtn" onClick={() => closeNav()}>
            &times;
          </a>
          <a className=" nav-item navbar-brand p-2" href="#" sx={{ mb: 3 }}>
            <img src={wlogo} width="100px" alt="" />
          </a>
          <NavLink
            className="nav-item"
            to="/"
            onClick={() => closeNav()}
            style={({ isActive }) =>
              isActive ? { color: "#539165", boxShadow: " 0 3px 0" } : undefined
            }
          >
            Home
          </NavLink>
          <NavLink
            className="nav-item"
            to="/aboutus"
            onClick={() => closeNav()}
            style={({ isActive }) =>
              isActive ? { color: "#539165", boxShadow: " 0 3px 0" } : undefined
            }
          >
            About Us
          </NavLink>
          <NavLink
            className="nav-item"
            to="/products"
            onClick={() => closeNav()}
            style={({ isActive }) =>
              isActive ? { color: "#539165", boxShadow: " 0 3px 0" } : undefined
            }
          >
            Products
          </NavLink>
        </div>{" "}
        <span onClick={() => openNav()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#539165"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </span>
        <div className="d-flex">
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive
                ? { color: "#539165" }
                : undefined
            }
          >
            <div className="headerCartIcon">
              <LogoutIcon
                className="cartIcon"
                sx={{
                  color: "secondary.main",
                  fontSize: "2.2em",
                  marginRight: "20px",
                }}
              />
            </div>
          </NavLink>
          <NavLink
            to="/profile"
            style={({ isActive }) =>
              isActive
                ? { color: "#539165" }
                : undefined
            }
          >
            <div className="headerCartIcon">
              <PersonOutlineOutlinedIcon
                className="cartIcon"
                sx={{
                  color: "secondary.main",
                  fontSize: "2.2em",
                  marginRight: "20px",
                }}
              />
            </div>
          </NavLink>
          <NavLink
            to="/cart"
            style={({ isActive }) =>
              isActive
                ? { color: "#539165" }
                : undefined
            }
          >
            <div className="headerCartIcon">
              <LocalMallOutlinedIcon
                className="cartIcon"
                sx={{ color: "secondary.main", fontSize: "2em" }}
              />
              {totalQuantity !== 0 ? (
                <span className="cartAmount">{totalQuantity}</span>
              ) : (
                <span></span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "WHITE",
          zIndex: "10000",
          boxShadow: "0 2px 10px rgba(0,0,0,.1)",
        }}
        className="d-block-lg"
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <NavLink className="nav-item logo" to="/">
              <img src={logo} alt="" width={"80px"} />
            </NavLink>
            <div className="d-flex  w-70">
              <NavLink
                className="nav-item"
                to="/"
                style={({ isActive }) =>
                  isActive
                    ? { color: "#539165", borderBottom: " 3px solid" }
                    : undefined
                }
              >
                Home
              </NavLink>

              <NavLink
                className="nav-item"
                to="/products"
                style={({ isActive }) =>
                  isActive
                    ? { color: "#539165", borderBottom: " 3px solid" }
                    : undefined
                }
              >
                Products
              </NavLink>
              <NavLink
                className="nav-item"
                to="/aboutus"
                style={({ isActive }) =>
                  isActive
                    ? { color: "#539165", borderBottom: " 3px solid" }
                    : undefined
                }
              >
                About Us
              </NavLink>
            </div>
            <NavLink
              to="/cart"
              style={({ isActive }) =>
                isActive
                  ? { color: "#539165", borderBottom: " 3px solid" }
                  : undefined
              }
            >
              <div className="headerCartIcon">
                <LocalMallOutlinedIcon
                  className="cartIcon"
                  sx={{ color: "secondary.main", fontSize: "2em" }}
                />
                {totalQuantity !== 0 || totalQuantity !== NaN ? (
                  <span className="cartAmount">{totalQuantity}</span>
                ) : (
                  <span></span>
                )}
              </div>
            </NavLink>{" "}
            <NavLink
              className="nav-item siginBtn"
              to="/signIn"
              style={{ backgroundColor: "#F7C04A" }}
            >
              Sign In
            </NavLink>{" "}
          </Toolbar>
        </Container>
      </AppBar>
      <nav className="mobile-menu d-flex-sm ">
        <div id="Sidenav" className="sidenav">
          <a href="#" className="closebtn" onClick={() => closeNav()}>
            &times;
          </a>
          <a className=" nav-item navbar-brand p-2" href="#" sx={{ mb: 3 }}>
            <img src={wlogo} width="100px" alt="" />
          </a>
          <NavLink
            className="nav-item"
            to="/"
            onClick={() => closeNav()}
            style={({ isActive }) =>
              isActive ? { color: "#539165", boxShadow: " 0 3px 0" } : undefined
            }
          >
            Home
          </NavLink>
          <NavLink
            className="nav-item"
            to="/aboutus"
            onClick={() => closeNav()}
            style={({ isActive }) =>
              isActive ? { color: "#539165", boxShadow: " 0 3px 0" } : undefined
            }
          >
            About Us
          </NavLink>
          <NavLink
            className="nav-item"
            to="/products"
            onClick={() => closeNav()}
            style={({ isActive }) =>
              isActive ? { color: "#539165", boxShadow: " 0 3px 0" } : undefined
            }
          >
            Products
          </NavLink>
        </div>{" "}
        <span onClick={() => openNav()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#539165"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </span>
        <div className="d-flex">
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive
                ? { color: "#539165" }
                : undefined
            }
          >
            <div className="headerCartIcon">
              <LogoutIcon
                className="cartIcon"
                sx={{
                  color: "secondary.main",
                  fontSize: "2.2em",
                  marginRight: "20px",
                }}
              />
            </div>
          </NavLink>
          <NavLink
            to="/profile"
            style={({ isActive }) =>
              isActive
                ? { color: "#539165" }
                : undefined
            }
          >
            <div className="headerCartIcon">
              <PersonOutlineOutlinedIcon
                className="cartIcon"
                sx={{
                  color: "secondary.main",
                  fontSize: "2.2em",
                  marginRight: "20px",
                }}
              />
            </div>
          </NavLink>
          <NavLink
            to="/cart"
            style={({ isActive }) =>
              isActive
                ? { color: "#539165" }
                : undefined
            }
          >
            <div className="headerCartIcon">
              <LocalMallOutlinedIcon
                className="cartIcon"
                sx={{ color: "secondary.main", fontSize: "2em" }}
              />
              {totalQuantity !== 0 ? (
                <span className="cartAmount">{totalQuantity}</span>
              ) : (
                <span></span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </React.Fragment>
  );
}
