import './App.css';
import {BrowserRouter, Route,Switch,Link} from 'react-router-dom'
import  'bootstrap/dist/css/bootstrap.css';

// import '../node_modules/bootstrap/js/dist/'


import users from './users';
import createuser from './create-user';
import editprofile from './edit-profile';
import edituser from './edituser';
import dashboard from './dashboard';
import profile from './profile';
import My404Component from './My404Component';
import { useState } from 'react';

function App() {
  const User_list=[]
  const [user,setUser] = useState(User_list)
  return (
    <BrowserRouter>
    <div className="postion-relative zindex">
    <nav id= "nav" className="navbar navbar-expand-lg position-fixed-nav">
  <a class="navbar-brand color-white m-1" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link className="m-2 nav-link color-white" to="/">Dashboard</Link>
            <Link className="m-2 nav-link color-white" to="/users">Users</Link>
            <Link className="m-2 nav-link color-white" to="/createuser">CreateUsers</Link>
            {/* <Link className="m-2 nav-link color-white" to="/editprofile/">Edit Profile</Link> */}
            <Link className="m-2 nav-link color-white" to="/edituser">Edit User</Link>
      
            {/* <Link className="m-2 nav-link color-white" to="/profile">Profile</Link>   */}
          </div>
  </div>
</nav>
</div>
    
    
    
   
    
   
    <Switch>
    <Route path="/users" component={users}></Route>
    <Route path="/createuser" component={createuser}></Route>
    <Route path="/editprofile" component={editprofile}></Route>
    <Route path="/edituser" component={edituser}></Route>
    <Route path="/profile" component={profile}></Route>
    <Route path="/" component={dashboard}></Route>
    <Route path='*' exact={true} component={My404Component} />

    </Switch>

    </BrowserRouter>
  );
}

export default App;
