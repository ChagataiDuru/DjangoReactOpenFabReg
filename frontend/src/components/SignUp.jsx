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
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from "@material-ui/core/Toolbar";
import FormControl from '@material-ui/core/FormControl';

import image from "./Images/Openfab_New_Banner.png";
import mypng from "./Images/openFabLogo.png";

import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ApartmentOutlinedIcon from '@material-ui/icons/ApartmentOutlined';
import ClassOutlinedIcon from '@material-ui/icons/ClassOutlined';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import "@fontsource/open-sans";

import {useFormik} from "formik";

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

    const Departments = [
      'ScoLa',
      'Engineering',
      'Business',
      'Law',
      'Aviation and Aeronautical Sciences',
      'Architecture and Design',
    ];
    
    const UniClass = [
      'Prep',
      '1st',
      '2nd',
      '3rd',
      '4th',
    ];
    const classes = useStyles(); // eslint-disable-next-line
    const goLogin = () => {

    }
    const formik = useFormik({
        initialValues: {
            namesurname: "",
            studentid: "",
            userDepart: "",
            userClass: ""
        },
        validationSchema: Yup.object({
          namesurname: Yup
                .string()
                .max(20)
                .required('namesurname is required'),
          studentid: Yup
                .string()
                .max(255)
                .required('studentid is required'),
          department: Yup
                .string()
                .max(255),
          classs: Yup
                .string()
                .max(255),
        }),
        onSubmit: async (values) => {
            console.log(values);
            await axios.post("https://127.0.0.1:8000/api/student/", values)
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
                  marginBottom: "10px"
                }
              }}
            />
            <TextField
              onChange={formik.handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="StudentNumber"
              label="Student Number"
              name="studentid"
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
                  marginBottom: "10px" 
                }
              }}

              
            />
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                id="userDepart"
                label="Department"
                name="userDepart"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <ApartmentOutlinedIcon />
                    </InputAdornment>
                  ),
                  style: {
                    padding: "2px",
                    borderRadius: "25px",
                    marginBottom: "20px"
                  }
                }}

                select
                value={formik.values.userDepart}
                onChange={formik.handleChange}
                error={
                  formik.touched.userDepart &&
                  Boolean(formik.errors.userDepart)
                }
                helperText={
                  formik.touched.userDepart && formik.errors.userDepart
                }
              >
                <MenuItem key={""} value={""}>
                    No Selected
                  </MenuItem>
                  {Departments.map((departs) => (
                  <MenuItem
                    key={departs}
                    value={departs}
                  >
                    {departs}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
            <FormControl fullWidth>
              <TextField
                  variant="outlined"
                  id="userClass"
                  label="Class"
                  name="userClass"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ClassOutlinedIcon />
                      </InputAdornment>
                    ),
                    style: {
                      padding: "2px",
                      borderRadius: "25px",
                      marginBottom: "20px"
                    }
                  }}
                  select
                  value={formik.values.userClass}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.userClass &&
                    Boolean(formik.errors.userClass)
                  }
                  helperText={
                    formik.touched.userClass && formik.errors.userClass
                  }
                >
                  <MenuItem key={""} value={""}>
                      No Selected
                    </MenuItem>
                    {UniClass.map((Classs) => (
                    <MenuItem
                      key={Classs}
                      value={Classs}
                    >
                      {Classs}
                    </MenuItem>
                  ))}
                </TextField>
            </FormControl>
            <Button
              type="submit"
              href="/success"
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