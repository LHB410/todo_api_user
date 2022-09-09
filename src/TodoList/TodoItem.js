import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import styled from '@emotion/styled'

const useStyles = styled('Grid')({
  root: {
    height: "3em",
    padding: "2em",
    margin: "1em"
  }
})

export default function TodoItem(props) {
  const classes = useStyles();
    return (
        <Grid container spacing={0}>
          <Grid item xs={9}>
            <Paper elevation={1} className={classes.root}>
              {props.item.task}
            </Paper>
          </Grid>
        </Grid>
    )
}
