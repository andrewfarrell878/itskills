
import Card from 'react-bootstrap/Card';
import React from 'react';
import axios from 'axios';
import { newExpression } from '@babel/types';
var ut = require('..//components/img/iphone.png');
var sm = require('..//components/img/samsung.jpg');
var hw = require('..//components/img/huawei.png');
var sx = require('..//components/img/sony.jpg');
class Phone extends React.Component {
  constructor(props){
    super(props);

    this.state = {
                  Iphone:'',
                  Samsung:'',
                  Huawei:'',
                  Sony:''
                };
   
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePhoneIphoneChange = this.handlePhoneIphoneChange.bind(this);
    this.handlePhoneSamsungChange = this.handlePhoneSamsungChange.bind(this);
    this.handlePhoneHuaweiChange = this.handlePhoneHuaweiChange.bind(this);
    this.handlePhoneSonyChange = this.handlePhoneSonyChange.bind(this);
  
  }
  
  

  handlePhoneIphoneChange(e){
    this.setState({Iphone: e.target.value});
  }

  handlePhoneSamsungChange(e){
    this.setState({Samsung: e.target.value});
  }

  handlePhoneHuaweiChange(e){
    this.setState({Huawei: e.target.value});
  }

  handlePhoneSonyChange(e){
    this.setState({Sony: e.target.value});
  }
 
  handleSubmit(e){
    alert(this.state.Iphone + "      " + this.state.Samsung + "    " + this.state.Huawei + "    " + this.state.Sony);
    e.preventDefault();
    
    
                const newPhone = {
              
                    Iphone: this.state.Iphone,
                    Samsung: this.state.Samsung,
                    Huawei: this.state.Huawei,
                    Sony: this.state.Sony,
                };
          axios.post('http://localhost:4000/api/phones',newPhone) 
          .then()
          .catch();
          

          this.setState({
          Iphone:'',
          Samsung:'',
          Huawei:'',
          Sony:''
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
        <h3 style={mystyle}>Iphone 8 64gbs/128gbs  </h3>
        <h5 style={mystyle}>Enter iphone model and storage size </h5>
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
          <h3 style={mystyle}>Samsung Galaxy s9 64gbs/128gbs  </h3>
          <h5 style={mystyle}>Enter Samsung model and storage size </h5>
       <img src = {sm} alt ="A"/>
        <input
          type='text' 
          className='form-control'
      
       
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


       
     
      <form onSubmit={this.handleSubmit}>
      <div className='form-group'>
        <h3 style={mystyle}>Huawei p30 pro 128gbs/256gbs  </h3>
        <h5 style={mystyle}>Enter Huawei model and storage size </h5>
     <img src = {hw} alt ="A"/>
      <input
        type='text' 
        className='form-control'
    
     
      value={this.state.Huawei}
      onChange={this.handlePhoneHuaweiChange}
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
        <h3 style={mystyle}>Sony xperia 1 64gbs/128gbs</h3>
        <h5 style={mystyle}>Enter Xperia model and storage size </h5>
     <img src = {sx} alt ="A"/>
      <input
        type='text' 
        className='form-control'
    
     
      value={this.state.Sony}
      onChange={this.handlePhoneSonyChange}
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