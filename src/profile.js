import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import './App.css';


let path = "https://jsonplaceholder.typicode.com/users";
let id = -1
class profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      name: '',
      phone: -1,
      website: '',
      company:'',
      adress:''
    };
    let array = props.location.pathname.split('/')
    id = array[array.length - 1]
  };
  componentDidMount() {
    this.getdata()
  }

  getdata = async () => {
    try {
      const { data } = await axios.get(`${path}/${id}`)
      this.setState({ users: data,company:data.company,adress:data.address})


    }
    catch (e) {
      alert("You are searching for the Invalid ID")
    }

  }

  render() {
    let adress =`${this.state.adress.street} ${this.state.adress.suite} ${this.state.adress.city} ${this.state.adress.zipcode}`
    return (

      <div id="container "className="main-div m-5 p-5">
        <section className="border border-info rounded main-div m-4 p-5  main-div">
          <heading className="align-center">
            <h4>Profile of {this.state.users.name}</h4>
          </heading>
          <div className="row m-2 ">
            <div className="col-3 ">
              <span className="m-5">ID</span>
            </div>
            <div className="col-2">
              <span>{this.state.users.id}</span>
            </div>
          </div>
          <div className="row m-2">
            <div className="col-3">
              <span className="m-5">Name</span>
            </div>
            <div className="col-3">
              <span>{this.state.users.name}</span>
            </div>
          </div>
          <div className="row m-2">
            <div className="col-3">
              <span className="m-5">Phone</span>
            </div>
            <div className="col-3">
              <span>{this.state.users.phone}</span>
            </div>
          </div>
          <div className="row m-2">
            <div className="col-3">
              <span className="m-5">Website</span>
            </div>
            <div className="col-3">
              <span>{this.state.users.website}</span>
            </div>
          </div>
          <div className="row">
                <div className="col-3 ">
                  <span className="m-5">Company Name</span>
                </div>
                <div className="col-2 m-1">
                  <span>{this.state.company.name}</span>
                </div>
          </div>
          <adress className="row m-2">
                <div className="col-3">
                  <span className="m-5">Address</span>
                </div>
                <div className="col-3">
                  <span>{adress}</span>
                </div>
          </adress>
          
{/* 
          {
            this.state.company.map((e) => {

              return (<div className="row">
                <div className="col-2">
                  <span className="m-5">Website</span>
                </div>
                <div className="col-2">
                  <span>{this.state.users.company.e}</span>
                </div>
              </div>)
            })} */}
        </section>
      </div>
    );
  }

}

export default profile;