import React, { Component } from  'react';
import { ThemeProvider } from 'react-bootstrap';

class RestaurantSearch extends Component {
    constructor() {
        super()
        this.state = {
            searchData: null,
            nodata : false,
        }
    }

    search(key){
        console.warn(key)
        fetch(" http://localhost:3000/restaurant?q="+key).then((data)=>{

            data.json().then((resp)=>{
                    console.warn("resp",resp)
                    if(resp.length>0){
                        this.setState({searchData:resp,nodata:false})
                     }else{
                        this.setState({nodata:true,searchData:null})
                    }
            })
        })
    }

    render() {
        return (
            <div>

                <h1>Restaurant Search</h1>
                <input type="text" onChange={(event)=>this.search(event.target.value)}></input>
                    <div>

                        {
                                this.state.searchData?
                                <div>
                                    {
                                        this.state.searchData.map((item)=><div>
                                            {item.name}
                                        </div>)
                                    }
                               
                                </div>
                                :""
                        }
                        {
                            this.state.nodata?<h3>Sorry,Data not Found</h3>:null
                        }
                        





                    </div>







            </div>
        );
    }
}

export default RestaurantSearch;