import logo from './logo.svg';
import './App.css';
import Hooks from './Hooks'
import './Container.css';
import React, {Component} from 'react';

class App extends Component {
  constructor(props){
  super(props)
  this.state={
    firstName:"",
    lastName:"",
  }
  this.submit=this.submit.bind(this);
  this.setFirstName=this.setFirstName.bind(this);
  this.setLastName=this.setLastName.bind(this);
  };
  submit(e) {
    console.log("submmited", e);
    console.log(this.state.firstName)
    console.log(this.state.lastName)
  };
  setFirstName(e){
console.log(e.target.value);
this.setState({firstName: e.target.value})

  }
  setLastName(e){
    console.log(e.target.value);
    this.setState({lastName:e.target.value})
  }
  
  render (){
    console.log("final state", this.state.firstName);
    console.log("final state", this.lastName);
  return (
    <div className="Container">
      <form>
      <h1>App in Class</h1>
      <Hooks/>
      <input type="text" placeholder="first name" value={this.state.firstName}onChange={e=> this.setFirstName(e)}/>
      <input type="text" placeholder="last name" value={this.state.lastName}onChange={e=> this.setLastName(e)}/>
      <input type="submit" onClick={this.submit} />
      </form>
    </div>
  );
  }
}
export default App;
