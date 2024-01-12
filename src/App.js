
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import { Component } from 'react';

class App extends Component{
  card_count = 0;
  state = {
    countVal : 0
  }
   getCount = (data)=>{
    this.card_count = data;
    this.setState({ countVal: this.card_count });
  }
  render(){
    return (
      <div className="App">
        <Header data = {this.state.countVal} />
        <Home count = {this.getCount} />
      </div>
    );
  }
 
}

export default App;
