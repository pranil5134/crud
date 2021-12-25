import axios from 'axios'
import React, { useState, useEffect,useLayoutEffect } from 'react';
import './App.css';
import  'bootstrap/dist/css/bootstrap.css';

let path="https://jsonplaceholder.typicode.com/users";
let id=-1
 class EditProfile extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      users: [],
      name:'',
      phone:-1,
      website:'',
    };
    let array=props.location.pathname.split('/')
     id=array[array.length-1]
  };

  

   

    componentDidMount(){
      this.getdata()
    }

    getdata= async ()=>{
      try{
        const {data}=await axios.get(`${path}/${id}`)
        this.setState({users:data,
          name:data.name,
          phone:data.phone,
          website:data.website
        })

      }
      catch(e)
      {
        alert("You are searching for the Invalid ID")
      }
    
   }

    handlesubmit = async (e)=>{
    e.preventDefault()
    const { data } = await axios.put(`${path}/${id}`, {
      name: this.state.name,
      phone: this.state.phone,
      website: this.state.website
    });
    const users=data

    this.setState({users,name:'',phone:'',website:''})


   }

   handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
    console.log(this.state.name)
  };
render()
{
  return (
      
    <div className="m-5 p-5"> 
      <form onSubmit={this.handlesubmit}>
      <div class="form-group col-md-6 align-center">
        <label for="id" className="m-2 col-2">ID</label>
        <input id="id" disabled value={this.state.users.id}></input>
      </div>
      <div class="form-group col-md-6 align-center">
      <label for="id" className="m-2 col-2">Name</label>
        <input type="text" value={this.state.name} name="name" onChange={this.handleChange}></input>
      </div>
      <div class="form-group col-md-6 align-center">
      <label for="id" className="m-2 col-2">phone</label>
        <input  name="phone" value={this.state.phone} onChange={this.handleChange}></input>
      </div>
      <div class="form-group col-md-6 align-center">
      <label for="id" className="m-2 col-2">Website</label>
        <input  name="website" value={this.state.website} onChange={this.handleChange}></input>
      </div>
      <div class="form-group col-md-6 align-center">
      <button className="btn-dark">Update Record</button>
      </div>
      </form>
      <section className="border border-info rounded m-4 p-5">
        <h6>ID</h6><span>{this.state.users.id}</span>
        <h6>Name</h6><span>{this.state.users.name}</span>
        <h6>Phone</h6><span>{this.state.users.phone}</span>
        <h6>Website</h6><span>{this.state.users.website}</span>
      </section>      
    </div>
  );
}
    
}
  
  export default EditProfile;