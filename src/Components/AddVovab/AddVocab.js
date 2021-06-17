import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addVocab } from "../../Store/Action/vocabAction";


const useStyles = makeStyles((theme) => ({
  root: {
      
    '& > *': {
      margin: theme.spacing(1),
      width: '95ch',
    },
    marginTop:200
  },
  b1:{
      textAlign:'right'
  },
  b2:{
      marginLeft:15
  }
}));

function AddVocab(props) {
  const classes = useStyles();
  const initialstate={
    name:'',
}

const [state,setstate] = useState(initialstate)

const changeHandler=(e)=>{
    e.persist()
    setstate(prev=>({...prev,[e.target.name]:e.target.value}))
}

const SubmitRecipeHandler=(e)=>{
    e.preventDefault()
    if(state.name.trim()===''){return alert(' Field Is Compulsury')}

    const name = state.name;
    

    props.addVocab(name)
    props.history.push('/')
    }
  return (
    <form className={classes.root} onSubmit={SubmitRecipeHandler} noValidate autoComplete="off">
      
      <TextField name='name' value={state.name} onChange={changeHandler} id="outlined-basic" label="Outlined" variant="outlined" />
      <div className={classes.b1}>
      <Button type='submit' variant="contained" color="primary">
      Save
    </Button>
    <Button onClick={()=>props.history.goBack()} className={classes.b2} variant="contained" color="secondary">
      Back
    </Button></div>
    </form>
  );
}



const mapDispatchToProps=({
    addVocab
})  
  
export default connect(null,mapDispatchToProps)(AddVocab);