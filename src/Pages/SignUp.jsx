import React, { useState } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import signUpBg from "../assets/sigup.jpg";
import { useNavigate } from "react-router-dom";
// import Stack from "@mui/material/Stack";
// import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SignUp = () => {
  const formRef = React.useRef();
  let navigate = useNavigate();
  const [signupState, setSignupState] = React.useState(null);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const handleSignIn = (e) => {
    e.preventDefault();
    navigate("/signin");
  };

  const handleNotification = () => {
    if (signupState === true && formData.password !== "") {
      setTimeout(() => navigate("/signin"), 600);

      return (
        <Alert severity="success" sx={{ mt: 4 }}>
          Your Account Was created! You can LogIn now!!
        </Alert>
      );
    } else if (signupState === false) {
      return (
        <Alert severity="error" sx={{ mt: 4 }}>
          There was an error in creating your account Try again.
        </Alert>
      );
    }
  };

  const { first_name, last_name, email, password } = formData;

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  async function handleSubmit(e) {

    e.preventDefault();
    // Check if any of the parameters are empty strings
    if (
      first_name !== "" &&
      last_name !== "" &&
      email !== "" &&
      password !== ""
    ) {
      try {
        // Make the POST request with Axios
        const response = await axios.post(
          "https://papuacoffee.onrender.com/user/register",
          formData
        );
        if (response.status == 200) {
          setSignupState(true);
        }
      } catch (error) {
        setSignupState(false);
        console.error("Error:", error);
      }
    } else {
      setSignupState(false);
    }
  }
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={4}
        sx={{
          backgroundImage: `url(${signUpBg})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={8}
        component={Paper}
        elevation={6}
        className="signUpFormVector"
        height={"100%"}
        justifyContent="center"
        display={"flex"}
        boxShadow={"none"}
      >
        <Box
          sx={{
            my: 8,
            mx: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            className="w-50"
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              ref={formRef}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="first_name"
                    label="First Name"
                    name="first_name"
                    value={first_name}
                    onChange={handleChange}
                    placeholder="First Name"
                    autoComplete="given-name"
                    autoFocus
                    type="text"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="last_name"
                    type="text"
                    value={last_name}
                    onChange={handleChange}
                    placeholder="Last Name"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={handleChange}
                    placeholder="Password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "secondary.main" }}
                onClick={() => {
                  handleNotification();
                  formRef.current.reportValidity();
                }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link variant="body2" href="" onClick={handleSignIn}>
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
              {handleNotification(null)}
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default SignUp;
