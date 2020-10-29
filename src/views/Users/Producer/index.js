import React from "react"
import ProducerForm from "./ProducerForm"
import useForm from "./useForm"
import {
    makeStyles,
    Paper,
    Grid,
    Box,
    Typography,
  } from "@material-ui/core"

  import { SupervisedUserCircleRounded } from '@material-ui/icons'
  
  const useStyles = makeStyles((theme) => ({
      root: {
          flexGrow:1,
          backgroundColor:theme.palette.dark
      },
      paper: {
        margin:"4px",
        padding: theme.spacing(2),
        color: theme.palette.text.primary,
      },
    }));

const ProducerModule = ()=>{

    const classes = useStyles()
    return(
        <div  className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Box display="flex">
                            <Paper elevation={6}>
                                <SupervisedUserCircleRounded fontSize="large"/>
                            </Paper>
                            <Box ml={5} display="flex"
                            justifyContent="space-between">
                            <Typography  variant="h3"
                                 color="Black">
                                Username
                            </Typography>
                            <Typography variant="h3"
                                 color="Black">
                                UserType
                            </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={6} className={classes.paper}>
                        <ProducerForm form={useForm()}/>
                    </Paper>
                </Grid>
               
            </Grid>
        </div>
    )
}

export default ProducerModule