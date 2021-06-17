import React from 'react'
import Onevocab from "./Onevocab/Onevocab";
import { connect } from 'react-redux';
import { readvocabAction } from "../../Store/Action/vocabAction";

function Allvocab(props) {
  
  props.readvocabAction()
  let allList = ''
  if(props.vocabulary){
    allList = props.vocabulary.map((v,i)=>
      <Onevocab key={i} vocab={v} />
    )
  }
    return allList
}
const mapStateToProps = state=>{
    return{
      vocabulary: state.vocabs
    }
  }

const mapDispatchToProps=({
    readvocabAction
})  
  
export default connect(mapStateToProps,mapDispatchToProps)(Allvocab);