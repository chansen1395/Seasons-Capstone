import * as React from "react";
// import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CheckBox from "@material-ui/core/CheckBox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/core/styles";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

// import { createTheme, ThemeProvider } from '@material-ui/core/styles';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// const theme = createTheme();

export default function SignOut() {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();

  const signOutSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    firebase
      .auth()
      .signOut()
      .then(function () {
        console.log("successfully signed out!");
      })
      .catch(function (error) {
        console.log(error.message);
      });
    navigate("/sign-in");
  };

  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    // ...
    return (
      // <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
             <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            {user.email}
            <br></br>
            Sign Out
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={signOutSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                  label="First Name"
                  autoFocus
                  />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  />
                </Grid> */}
              {/* <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
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
                  autoComplete="new-password"
                />
              </Grid> */}
              <hr />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Out
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      // </ThemeProvider>
    );
  } else {
    return(
    <Container>
      <Link href="sign-in" variant="body2">
        {"You are not signed in. Sign In?"}
      </Link>
      <hr></hr>
      <Link href="sign-up" variant="body2">
        {"Don't have an account? Sign Up"}
      </Link>
    </Container>
    );
  }
}
