import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const Home = () => {
  return (
    <Container>
      <div style={{ height: "200px" }}></div>

      <Grid container>
        <Grid item container md={6}>
          <Grid item md={12}>
            <Typography variant="h4">I am Shah Md Nuruddin</Typography>
            <Typography variant="h4">A Full-Stack Developer</Typography>
            
          </Grid>
          <Grid item md={12} style={{ marginTop: "15px" }}>
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: "5px" }}
            >
              Hire Me
            </Button>
            <Button variant="contained" color="primary">
              View Porfolio
            </Button>
          </Grid>
          <Grid item md={12} style={{ marginTop: "15px" }}>
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
