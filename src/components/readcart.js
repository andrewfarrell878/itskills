import Card from 'react-bootstrap/Card';
import React from 'react'
import Phones from './phones';
import axios from 'axios';



class Readcart extends React.Component{

    state = {
        phones: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/phones')
        .then((response)=>{
            this.setState({phones: response.data.phones})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render() {
    const mystyle = {

      
        color: "white",
        backgroundColor: "lightBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
  
    
        return(
            <Card style={{ width: '30rem' }}>
            <Card.Body>
                <h1 style={mystyle}>Your Purchased items!</h1>
                <Phones myPhones={this.state.phones}></Phones>
           
        </Card.Body>
          </Card>
        );
    }
}
export default Readcart;