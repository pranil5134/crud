import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
import React, { useState, useEffect, useLayoutEffect } from 'react';
import './App.css';
import dashboard from './dashboard';


const API_URL = "https://jsonplaceholder.typicode.com/users"
class createuser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id:'hello',
      phone:'',
      name:'',
      website:'',
      users: []

    };
  };


  componentDidMount() {
    this.getdata();
    //this.getcomments(postid);
  }



 
  createUser = async () =>{
    const {data} = await axios.post(API_URL,{
      name:this.state.name,
      phone:this.state.phone,
      website:this.state.website
    })
    const users=[...this.state.users]
    users.push(data)
    console.log(users)
    this.setState({users,name:'',phone:'',website:''})
  }

  getdata = async () => {
    console.log("getdata")
    const { data } = await axios.get(API_URL);
    this.setState({ users: data })
    }

  OnChangePhone=(e)=>{
    this.setState({phone:e.target.value})
  }

  OnChangeName=(e)=>{
    this.setState({name:e.target.value})
  }

  OnChangeWbsite=(e)=>{
    this.setState({website:e.target.value})
  }

  handleSubmit=e=>{
    e.preventDefault()
    this.createUser()
    this.setState({name:'',
    phone:'',
    website:''})
  }
  

  render() {
    return (


      <section className="m-4 p-5  ">
        <div>
          <form  className=" align-center " onSubmit={this.handleSubmit}>
            <div className="form-row ">
              {/* <div class="form-group col-md-6 align-center">
                <label for="Id">Id</label>
                <input type="number" class="form-control" onChange={this.OnChangeId}  value={this.id}id="Id" placeholder="ID" />
              </div> */}
              <div class="form-group col-md-6 align-center">
                <label for="Name">Name</label>
                <input type="text" class="form-control" onChange={this.OnChangeName} value={this.state.name} id="Name" placeholder="NAME" />
              </div>
              <div class="form-group col-md-6  align-center">
                <label for="phone">Phone</label>
                <input type="tel" class="form-control"  onChange={this.OnChangePhone} value={this.state.phone} id="phone" placeholder="Phone" />
              </div>
              <div class="form-group col-md-6  align-center">
                <label for="Website">Website</label>
                <input type="text" class="form-control" onChange={this.OnChangeWbsite} value={this.state.website} id="Website" placeholder="WEBSITE" />
              </div>
            </div>
            <button type="submit" class="btn btn-primary align-center" >Add Post</button>
          </form>
        </div>
        <section className="m-4 p-5">
       <div>
       <table class="table">
            <thead><tr>
            <th  scope="col">Id</th>
            <th  scope="col">Name</th>
            <th  scope="col">Phone</th>
            <th  scope="col">Website</th></tr></thead> 
             
         { this.state.users.map((user, index) => {
           return(
            <tr key={index}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.phone}</td>
            <td><a href={user.website}>{user.website}</a></td></tr>
             
           )
         }
         )}
       </table>
       </div>
         
       
     </section>
   
      </section>
     
       
    );
  }
}

export default createuser;
