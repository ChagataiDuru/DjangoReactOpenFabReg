import React from 'react';
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";

import image from "./Images/Openfab_New_Banner.png";
import mypng from "./Images/openFabLogo.png";

import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';

import {useFormik} from "formik";
import { useParams } from "react-router-dom";

import * as Yup from 'yup';
import axios from "axios";

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
    margin: theme.spacing(4, 12),
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

function Cover() {
    const classes = useStyles(); // eslint-disable-next-line
    const { id } = useParams();
    const type = parseInt(id);
    const goLogin = () => {
      window.location.href = "/login";
    }
    const formik = useFormik({
        initialValues: {
            namesurname: "",
            email: "",
            compDep: "",
            otherId: "",
            otherType: type,
        },
        validationSchema: Yup.object({
            namesurname: Yup
                .string()
                .max(255)
                .required('namesurname is required'),
            email: Yup
                .string()
                .max(255)
                .required('email is required'),
            otherId: Yup
                .string()
                .max(255)
                .required('Id is required'),
            compDep: Yup
                .string()
                .max(255),
        }),
        onSubmit: async (values) => {
            console.log(values);
            await axios.post("https://127.0.0.1:8000/api/others/", values)
                .then((response) => {
                    if (response && response.data) {
                        console.log(response.data)
                        goLogin();
                    }
                })
                .catch((err) => {
                    if (err && err.response) {
                        console.log(err);
                        console.log("something is wrong");
                    }
                })
        }
    });
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
        elevation={6}x
      >
        <Box display="flex" justifyContent="space-between">
        <div className={classes.paper}>
          <Toolbar>
            <img src={mypng} alt="" className={classes.logo} />
          </Toolbar>
            
          <form className={classes.form} onSubmit={formik.handleSubmit} noValidate>
            <TextField
              onChange={formik.handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="NameSurname"
              label="Name Surname"
              name="namesurname"
              autoFocus
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleOutlinedIcon />
                  </InputAdornment>
                ),
                style: {
                  padding: "3px",
                  borderRadius: "25px",
                  marginBottom: "10px",
                }
              }}
            />
            <TextField
              onChange={formik.handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-Mail"
              name="email"
              autoFocus
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlinedIcon />
                  </InputAdornment>
                ),
                style: {
                  padding: "3px",
                  borderRadius: "25px",
                  marginBottom: "10px",
                }
              }}
            />
            <TextField
              onChange={formik.handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="otherId"
              label="Id"
              name="otherId"
              autoFocus
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SchoolOutlinedIcon />
                  </InputAdornment>
                ),
                style: {
                  padding: "3px",
                  borderRadius: "25px",
                  marginBottom: "10px",
                }
              }}
            />
            <TextField
              onChange={formik.handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="compDep"
              label="Company / Department"
              name="compDep"
              autoFocus
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BusinessOutlinedIcon />
                  </InputAdornment>
                ),
                style: {
                  padding: "3px",
                  borderRadius: "25px",
                  marginBottom: "10px",
                }
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{
                borderRadius: 40,
                backgroundColor: "#FFD400",
                padding: "16px 36px",
                fontSize: "16px",
                fontWeight: 900,
                color: '#ffffff',
                fontFamily: "Open Sans",
              }}       
              className={classes.submit}
              disabled={formik.isSubmitting}
            >
              Sign Up
            </Button>
            
            <Grid container>
              <Grid item>
                Already a member?{" "}
                  <Link href="/login" variant="body2">
                    {"Log In"}
                  </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
        </Box>
      </Grid>
    </Grid>
    );
}

export default Cover;