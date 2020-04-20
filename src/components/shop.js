
import Card from 'react-bootstrap/Card';
import React from 'react';
import axios from 'axios';
import { newExpression } from '@babel/types';
var ut = require('..//components/img/iphone.png');
var sm = require('..//components/img/samsung.jpg');

class Phone extends React.Component {
  constructor(props){
    super(props);

    this.state = {
                  Iphone:'',
                  Samsung:'',
    }
   
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePhoneIphoneChange = this.handlePhoneIphoneChange.bind(this);
    this.handlePhoneSamsungChange = this.handlePhoneSamsungChange.bind(this);

  }
  
  

  handlePhoneIphoneChange(e){
    this.setState({Iphone: e.target.value});
  }

  handlePhoneSamsungChange(e){
    this.setState({Samsung: e.target.value});
  }

 
  handleSubmit(e){
    alert(this.state.Iphone + "      " + this.state.Samsung);
    e.preventDefault();
    
    
                const newPhone = {
              
                    Iphone: this.state.Iphone,
                    Samsung: this.state.Samsung,
               
                };
          axios.post('http://localhost:4000/api/phones',newPhone) 
          .then()
          .catch();
          

          this.setState({
          Iphone:'',
          Samsung:''
        });    
  }

  render() {
     
  
    const mystyle = {

      
      color: "white",
      backgroundColor: "lightBlue",
      padding: "10px",
      fontFamily: "Arial"
    };

    return (


      
     
        
     
      <Card style={{ width: '40rem' }}>

         
      <Card.Body>
      
        <form onSubmit={this.handleSubmit}>
          
        <div className='form-group'>
        <h3 style={mystyle}>Phone</h3>
        <img src = {ut} alt ="A"/>

        <input
          type='text'
          className='form-control'
          value={this.state.Iphone}
          onChange={this.handlePhoneIphoneChange}
          ></input>
    
          </div>  
      
         <div>
          <input
          type="submit"
          value="Add Phone to cart">
          </input>
        </div>
        </form>
 
     

        
     

        <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <h3 style={mystyle}>Phone</h3>
       
       <img src = {sm} alt ="A"/>
        <input
          type='text' 
     
      
       
        value={this.state.Samsung}
        onChange={this.handlePhoneSamsungChange}
        ></input>
         
          </div>  
      
         <div>
          <input
          type="submit"
          value="Add Phone to cart">
          </input>
        </div>
        </form>


        </Card.Body>
          </Card>
      
     
        
        
        
        
    );
  }
}

export default Phone;