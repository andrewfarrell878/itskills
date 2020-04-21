import React from 'react';
import '../App.css';
var hw = require('..//components/img/huawei.jpg');
var ps = require('..//components/img/phoneshop.png');
class Content extends React.Component {

    render() { 
  
      const mystyle = {
  
        
        color: "white",
        backgroundColor: "darkblue",
        padding: "10px",
        fontFamily: "Arial"
      };
      return (
        <div className="App">
  
     
  <h1 style={mystyle}>Welcome to the Phone Shop !</h1>
  <img src = {ps} alt ="A"/>
  <h3 style={mystyle}>Here you can browse items , add product details in dialog box and add them to the cart and purchase them </h3>
 
  <img src = {hw} alt ="A"/>
  
  
        </div>
      );
    }
  }
  
  export default Content;