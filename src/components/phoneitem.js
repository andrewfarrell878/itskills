import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
var iphone = require('..//components/img/iphone.png');
var  samsung = require('..//components/img/samsung.jpg');

class phoneitem extends React.Component{

  constructor(){
    super();
    this.DeletePhone = this.DeletePhone.bind(this);
  }

  DeletePhone(e){
    console.log("Delete Clicked");
    axios.delete("http://localhost:4000/api/phones/"+this.props.phone._id)
    .then()
    .catch();

  }

    render(){


     const mystyle = {

      
        color: "white",
        backgroundColor: "lightBlue",
        padding: "1px",
        fontFamily: "Arial"
      };
  
        return(
            <div>
                {}
   
  
  <Card  border="primary" style={{ width: '16rem' }}>
  
  <Card.Body>
    <blockquote className="blockquote mb-0">
   
      {this.props.phone.Iphone}
      {this.props.phone.Samsung}
    
    </blockquote>
  </Card.Body>
  <Button variant="info" onClick={this.DeletePhone}>Delete Phone</Button>
  



</Card>




            </div>
        )
    }
}
export default phoneitem;