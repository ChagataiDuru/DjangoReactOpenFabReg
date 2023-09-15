import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import {
  makeStyles,
} from "@material-ui/core/styles";
import image from "./Images/Openfab_New_Banner.png";
import mypng from "./Images/openFabLogo.png";

import {QrScanner} from '@yudiel/react-qr-scanner';

import axios from "axios";
import "@fontsource/open-sans";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        OpenFab
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({

  typography: {
    fontFamily: 'Open Sans'
  },
  root: {
    height: "100vh",
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],

    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  size: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },

  paper: {
    margin: theme.spacing(2, 6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(0),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  logo: {
    maxWidth: 240,
  },
}));

export default function QRLogin(props) {
  const classes = useStyles();

  function createPost(data) {
    axios.post("http://127.0.0.1:8000/api/id/", {
        id: data,
      })
      .then((res) => {
        if (res && res.data) {
            console.log(res.data)
            console.log("Success")
            console.log(data)
            props.history.push("/afterwelcome", {state: data})
        }
    })
    .catch((err) => {
        if (err) {
            console.log("Error:", err)
            props.history.push("/state")
        }
    })
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
      <Grid
        className={classes.size}
        item
        xs={12}
        sm={8}
        md={4}
        component={Paper}
        elevation={1}
      >
        <div className={classes.paper}>
          <Toolbar>
            <img src={mypng} alt="" className={classes.logo} />
          </Toolbar>
          <Typography variant="h6" fontWeight="medium" mt={1}>
                        Log In
          </Typography>
          <InputLabel>
            Please show the QR code on your
            student card via MyOzu App.
          </InputLabel>
          <QrScanner
            delay={ 300 }
            style={ {width: '100%'} }
            onDecode={(result) => console.log(String(result), 'result')}
            onError={(error) => console.log(error?.message)}
            constraints={{ facingMode: 'environment', focusMode: "continuous", zoom: 4.0 }}
            onResult={(result) => {createPost(result+'')}}
          />
            <Grid container>
              <Grid item>
                <Link href="/welcome" variant="body2">
                  {"*"}{/* ..... people have checked-in today. */}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
        </div>
      </Grid>
    </Grid>
  );
}
