import React from "react";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";

const Navigation = () => {
  const history = useHistory();

  const routePage = (urlPath) => {
    history.push(urlPath);
  };
  return (
    <>
      <Container>
        <Toolbar>
          <Grid container justify="flex-start">
            <Grid item >
              <MenuItem onClick={() => routePage("/")} >SM NURUDDIN</MenuItem>
            </Grid>

          </Grid>

          <Grid container justify="flex-end">
     
            <Grid item>
              <MenuItem onClick={() => routePage("/")}> Home</MenuItem>
            </Grid>
            <Grid item>
              <MenuItem onClick={() => routePage("/about")}> About</MenuItem>
            </Grid>
            <Grid item>
              <MenuItem onClick={() => routePage("/services")}>
                Services
              </MenuItem>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </>
  );
};

export default Navigation;
