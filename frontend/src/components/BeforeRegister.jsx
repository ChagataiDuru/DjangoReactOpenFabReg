import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
  makeStyles,
} from "@material-ui/core/styles";
import image from "./Images/Openfab_New_Banner.png";
import mypng from "./Images/openFabLogo.png";

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
    fontFamily: 'Open Sans',
    button: {
      textTransform: 'none'
    }
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
    borderRadius: 50,
    padding: "20px 36px",
    fontFamily: 'Open Sans',fontSize: "24px",color:"#231f20",fontWeight: "lighter",
    textTransform: 'none'
  },
  logo: {
    maxWidth: 240,
  },
}));

export default function Main(props) {

  const classes = useStyles();
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
          <Typography variant="h6" fontWeight="low" mt={1}>
                                Welcome!
          </Typography>
          <Typography variant="h6" fontWeight="low" mt={1}>
                        Please select your current state. :)
          </Typography>
          <form className={classes.form} noValidate>
              <Button
                  type="submit"
                  href="/signup"
                  fullWidth
                  variant="outlined"  
                  label='Styled button'    
                  className={classes.submit}
                  >
                  Student
                </Button>
            <Button
              type="submit"
              href="/signupother/2"
              fullWidth
              variant="outlined"
              className={classes.submit}
            >
              Academician
            </Button>
            <Button
                  type="submit"
                  href="/signupother/3"
                  fullWidth
                  variant="outlined"         
                  onClick={()=> props.displaySecrete(1)}
                  className={classes.submit}
                >
                Entrepreneur
              </Button>
            <Button
              type="submit"
              href="/signupother/4"
              fullWidth
              variant="outlined"      
              className={classes.submit}
            >
              Other
            </Button>
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
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
