import React, { Component } from 'react';

class RestaurantUpdate extends Component {
    constructor(){
        super();
        this.state={
            name : null,
            email :null,
            address :null,
            rating :null,
            id : null
        }
    }    
    
    componentDidMount(){
        fetch('http://localhost:3000/restaurant/'+this.props.match.params.id).then((response)=>{
            response.json().then((result)=>{
                this.setState({
                    name : result.name,
                    email : result.email,
                    rating : result.rating,
                    address : result.address,
                        id   : result.id
                
                
                
                })
            })

            
        })
    }



    update(){
        fetch("http://localhost:3000/restaurant/"+this.state.id,{
            method :"PUT",
            headers :{
                'Content-Type' :'application/json'
            },
            body: JSON.stringify(this.state)
      }).then(result=>{
          result.json().then((resp)=>{
              if(this.state.name==null && this.state.rating==null && this.state.address==null && this.state.email==null)
              alert("Not Updated")
              else
              alert("Restaurant has been Updated")
          })
      })
    }














    render() {
        
        return (
            
               
               <div>
                <h1>Restaurant Update</h1>
              <input onChange={(event)=>{this.setState({name:event.target.value})}}
                  placeholder="Restaurant name" value={this.state.name}
              /><br></br><br></br>
              <input onChange={(event)=>{this.setState({email:event.target.value})}}
                  placeholder="Restaurant Email" value={this.state.email}
              /><br></br><br></br>
              <input onChange={(event)=>{this.setState({rating:event.target.value})}}
                  placeholder="Restaurant Rating" value={this.state.rating}
              /><br></br><br></br>
              <input onChange={(event)=>{this.setState({address:event.target.value})}}
                  placeholder="Restaurant address" value={this.state.address}
              /><br></br><br></br>
                    <button onClick={()=>{this.update()}}>Update Restaurant</button>
            


            </div>
        );
    }
}

export default RestaurantUpdate;