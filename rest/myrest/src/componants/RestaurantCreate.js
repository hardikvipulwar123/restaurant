import React, { Component } from 'react';

class RestaurantCreate extends Component {
    constructor(){
        super();
        this.state={
            name : null,
            email :null,
            address :null,
            rating :null,
        }

     }
    create(){
        fetch("http://localhost:3000/restaurant",{
            method :"Post",
            headers :{
                'Content-Type' :'application/json'
            },
            body: JSON.stringify(this.state)
      }).then(result=>{
          result.json().then((resp)=>{
              if(this.state.name==null && this.state.rating==null && this.state.address==null && this.state.email==null)
              alert(" Rest is Not Registered ")
              else
              alert("Restaurant is  now Registered")
          })
      })
    }
    
    render() {
           return (
                
            <div>
                <h1>Restaurant Registration</h1>
              <input onChange={(event)=>{this.setState({name:event.target.value})}}
                  placeholder="Restaurant name"
              /><br></br><br></br>
              <input onChange={(event)=>{this.setState({email:event.target.value})}}
                  placeholder="Restaurant Email"
              /><br></br><br></br>
              <input onChange={(event)=>{this.setState({rating:event.target.value})}}
                  placeholder="Restaurant Rating"
              /><br></br><br></br>
              <input onChange={(event)=>{this.setState({address:event.target.value})}}
                  placeholder="Restaurant address"
              /><br></br><br></br>
                    <button onClick={()=>{this.create()}}>Add Restaurant</button>
            </div>
        );
    }
}

export default RestaurantCreate;
