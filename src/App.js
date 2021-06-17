import React, { Component ,Fragment} from 'react';
import Header from "./Components/Header/Header";
import {Redirect,Route,Switch } from "react-router-dom";
import {Grid} from '@material-ui/core';
import Allvocab from "./Components/Allvocab/Allvocab";
import VocabDetail from "./Components/VocabDetail/VocabDetail";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { readvocabAction } from "./Store/Action/vocabAction";
import AddVocab from "./Components/AddVovab/AddVocab";

class App extends Component {
  componentDidMount(){
    this.props.readvocabAction()
  }
  render() {
    return (
      <Fragment>
        <Header/>
        <Grid container>
          <Grid sm={2} item></Grid>
          <Grid sm={8} item>
            <Switch>
              <Route path='/allvocab' component={Allvocab} />
              <Route path='/addvocab' component={AddVocab} />
              <Route path='/vocabdetail/:id' component={VocabDetail} />
              <Redirect from='/' to='/allvocab'  />
            </Switch>
          </Grid>
          <Grid sm={2} item></Grid>
        </Grid>
      </Fragment>
    )
  }
}

const mapDispatchToProps=({
  readvocabAction
})

export default connect(null,mapDispatchToProps)(withRouter(App));