import React, { Component } from 'react';

class Header extends Component {
  constructor(){
    super();
    this.state={
      name:"Sun Studio",
      count:0
    };
  }
  render(){
    setTimeout(()=>{
      this.setState({name:"React toturial"});
    },3000); // state
    setTimeout(()=>{
      this.setState({count:this.state.count + 1});
    },100); // state
    return (
      <div>
      <h1>Course React</h1>
      <h1>{this.state.name}</h1>
      {/*<p>{this.state.count}</p>*/}
      <a href="/app">App</a>
      </div>
    );
  }
}

export default Header;
