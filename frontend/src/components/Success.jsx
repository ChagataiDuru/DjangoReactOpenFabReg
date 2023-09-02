import React,{useEffect} from "react";
import { useHistory } from "react-router";
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
import tik from "./Images/tik.png";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Çağatay Duru
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({

  typography: {
    fontFamily: 'OpenSans'
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
    width: "100%", // Fix IE 11 issue.
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
  const history = useHistory()
  const classes = useStyles();
  useEffect(() => {
    setTimeout(() => {
      history.push('/main')
    }, 6000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
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
        square
      >
        <div className={classes.paper}>
          <Toolbar>
            <img src={mypng} alt="" className={classes.logo} />
          </Toolbar>
          <Typography variant="h8" fontWeight="low" color="white" mt={1}>
                                Welcome to OPENFAB!
                        You are the ......rd person who checked-in today.
          </Typography>
          <InputLabel>
                <Toolbar>
                    <img src={tik} alt="" className={classes.logo} />
                </Toolbar>
          </InputLabel>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {""}{/* ..... people have checked-in today. */}
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
