import React from 'react';
import '../App.css';
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
  <h2 style={mystyle}>Here you can add items to the cart and purchase them </h2>
 
  
  
        </div>
      );
    }
  }
  
  export default Content;