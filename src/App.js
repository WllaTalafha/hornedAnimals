import React from 'react';
import Header from './components/header';
import Main from './components/main';
import Fotter from './components/fotter';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  filtered = (hornsNum) => {
    this.setState({
      beasts: hornsNum
    })
  }

  render() {
    return (
      <>
        <Header />

        <Main filtered={this.filtered}/>

        <Fotter />


      </>

    );}}
export default App;