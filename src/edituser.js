import  'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
import React, { useState, useEffect,useLayoutEffect } from 'react';
import {Link} from 'react-router-dom' 
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
  
  handleDelete=async ID =>{
  await axios.delete(`${API_URL}/${ID}`)
    let users = [...this.state.users];
    users = users.filter(user => user.id != ID);
    this.setState({users})
    setTimeout(function(){ alert("user has been deleted"); }, 700);
    
  }


  



  render(){return (

 
    <section className="m-4 p-5">
      <div>
      <table class="table">
           <thead><tr>
           <th  scope="col">Id</th>
           <th  scope="col">Name</th>
           <th  scope="col">Phone</th>
           <th  scope="col">Website</th>
           <th scope="col">Application</th>
          </tr></thead> 
          
            
        { this.state.users.map((user, index) => {
          console.log(user.website)
          let linktoid="/editprofile/"+user.id
          let linktoprofile="/profile/"+user.id
          return(
          <tr>
           <td>{user.id}</td>
           <td>{user.name}</td>
           <td>{user.phone}</td>
           <td><a href="https://google.com" target="_blank">{user.website}</a></td>
           <td>
           <Link to={linktoid}>
           <button className="btn btn-primary align-center m-2 " >Edit User</button>
           </Link>
           <Link to={linktoprofile}>
           <button className="btn btn-dark align-center m-2 " >View Profile</button>
           </Link>
           <span>
           <button className=" btn btn-danger" onClick={()=>{this.handleDelete(user.id)}}>Delete</button>
           </span>
           </td>
           </tr>
         
            
          )
        }
        )}
      </table>
      </div>
        
      
    </section>
    );
  }}
  
  export default Users;
