import './App.css';
import {BrowserRouter, Route,Switch,Link} from 'react-router-dom' 
import { useState } from 'react'; 

function Notfound({state}) {
  var [id,setId]=useState()
  const linktoid = '/edituser/'+id
  console.log(state)

  var changehandler=(e)=>{
    setId(id=e.target.value)
  }
  return (
 
    <div className="margin m-5 p-5 ">
        <h1 >404</h1>
        <h2>Page Not Found</h2>
    </div>
  );
}

export default Notfound;
