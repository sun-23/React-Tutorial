import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header';

// JSX

class App extends Component {
  constructor(){
    super();
    this.state={
      data:[],
      message:"UnLike",
      type:""
    }

    this.changeMessage = this.changeMessage.bind(this); // blinding
    this.insertData = this.insertData.bind(this);
  }
  changeMessage(){
    this.setState({message:"Like"});
  }
  insertData(){
    var item = "React";
    var myArray = this.state.data;
    myArray.push(item);
    this.setState({data:myArray});
  }
  onChange(event){
    this.setState({type:event.target.value});
  }
  render(){
    var mystyle = {
      color:'#FF0000',
      backgroundColor: "DodgerBlue",
      fontFamily: "Arial"
    }
    return (
      <div>
         <h1 style={mystyle /* Block Comments style css*/}>React Hello World!</h1>
         <h2>{50 * 50 /* {50*50} it show 2500 */}</h2>
         <Header/> {/* Call function*/}
         <Content title="Course" name="Sun studio" price="Free"/>
         <Footer text="GG" name="Call of Dutyyyyy"/>
         <h1>{this.state.message}</h1>
         <button onClick={this.changeMessage} >{this.state.message}</button><br/> {/*event onClick*/}
         <h1>{this.state.data}</h1>
         <button onClick={this.insertData}>Insert</button><br/><br/> {/*event onClick*/}
         <h1>Welcome : {this.state.type}</h1>
         <input type="text" onChange={this.onChange.bind(this)}/> {/*event onChange get value*/}
         <br/><br/>
         <h1>Sun Call of duty</h1>
         <a href="/header">Header</a>
      </div>
    );
  }
}

class Content extends Component {
  render(){
    return (
      <div>
      <h1>Basic!!! Facebook JS library</h1>
      <p>{this.props.title}</p> {/* Props */}
      <p>{this.props.name}</p>
      <p>{this.props.price}</p>
      </div>
    );
  }
}

function Footer(props) {
  var mystyle = {
    color:'Blue',
    fontFamily: "Arial"
  }
  return (
    <div>
    <h2 style={mystyle}>CopyRight 2019 - React</h2>
    <p>{props.text}</p> {/* Props */}
    <p>{props.name}</p>
    </div>
  );
}

export default App; // export class App
