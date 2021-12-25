import  'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
import React, { useState, useEffect,useLayoutEffect } from 'react';
import './App.css';


const API_URL ="https://jsonplaceholder.typicode.com/users"

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      users: []
    };
  };

  
  componentDidMount() {
    this.getdata();
    //this.getcomments(postid);
  }


   getdata=async () => {

    const { data } = await axios.get(API_URL);
   this.setState({users:data})
    console.log(this.state.users[0])
 
  }
  


  



  render(){return (

 
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

           <tr>
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
    );
  }}
  
  export default Users;
