import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { findvocabAction } from "../../Store/Action/vocabAction";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '116ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

function VocabDetail(props) {
  const classes = useStyles();
  
const [state, setstate] = useState({
  definitions:"",
  etymologies:"",
  examples:"",
  iddd:"",
  synonyms:""
});

useEffect(() => {
 if(props.vocabulary === null){
   setTimeout(() => {
    props.findvocabAction(props.match.params.id)
  }, 10);
    
  }else{
    
    setstate({...props.vocabulary})
  }
  
}, [props.vocabulary]);


  

  //  let {definitions,etymologies,examples,iddd,synonyms} = props.vocabulary

    

  return (
    <List className={classes.root}>
      
      
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={state.iddd.toUpperCase()} src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={state.iddd}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              <br />
{state.iddd }   -   </Typography>
            {state.definitions}
            
             
             <Typography
             component="span"
             variant="body2"
             className={classes.inline}
             color="textPrimary"
           >
           <br /><br />
             {state.etymologies} 
           </Typography>

           <Typography
             component="span"
             variant="body2"
             className={classes.inline}
             color="textPrimary"
           >
           <br /><br />
             {state.examples} 
           </Typography>

           <Typography
           component="span"
           variant="body2"
           className={classes.inline}
           color="textPrimary"
         >
         <br /><br />
           {state.synonyms} 
         </Typography>

            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />

    </List>
  );
}

const mapStateToProps = state=>{
  return{
    vocabulary: state.activeVocab
  }
}

const mapDispatchToProps=({
  findvocabAction
})

export default connect(mapStateToProps,mapDispatchToProps)(VocabDetail);