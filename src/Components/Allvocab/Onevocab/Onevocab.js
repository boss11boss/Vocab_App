import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginBottom:15
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

function Onevocab(props) {
  let {_id,definitions,iddd} = props.vocab

  const classes = useStyles();
  const theme = useTheme();
  return (
    <Card onClick={()=>props.history.push(`/vocabdetail/${_id}`)} className={classes.root}>
      <div className={classes.details}>
        <CardContent  className={classes.content}>
          <Typography component="h5" variant="h5">
            {iddd}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {definitions}
          </Typography>
        </CardContent>
        
      </div>
      
    </Card>
  );
}


export default withRouter(Onevocab)