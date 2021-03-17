import React ,{useState} from 'react'
import Grid from '@material-ui/core/Grid'
// import ProImage from './profile_pic.jpg'


import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import LinearProgress from '@material-ui/core/LinearProgress';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));


const About = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return ( <>
    <div style={{ height: "200px" }}></div>
    <Grid container>
    
        <Grid item md={6}>
            {/* <img src={ProImage} height="400px" width="95%"></img> */}
        </Grid>
        <Grid item md={6}>
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="About Me" {...a11yProps(0)} />
                    <Tab label="Skills" {...a11yProps(1)} />
                    <Tab label="Experience" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <Typography variant="h4">
                        My Story
                    </Typography>
                    <p>Eager to learn new technologies and tools. Enthusiastic about doing problem-solving and developing new tools. </p>
                    
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <p>Eager to learn new technologies and tools. Enthusiastic about doing problem-solving and developing new tools. </p>
                    <LinearProgress value={80} />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Typography variant="h5">
                         Freelance Web Developer
                    </Typography>
                    <small style={{color:'blue'}}>08/20-present</small>
                    <p>
                      <ul>
                        <li>Designing and implementing backend restful API with node.js</li>
                        <li> Worked with many clients from various countries.</li>
                        <li>Built, designed, and maintained one many projects with node.js and other frontend tools.</li>
                      </ul>
                    
                   
                   
                    </p>
                </TabPanel>
            </div>
        </Grid>

    </Grid>
    
        
    </> );
}
 
export default About;