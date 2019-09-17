import React, { useState, useEffect } from 'react';
import './App.css';
import SideBar from './modules/SideBar'
import ListThreads from './modules/ListThreads'
import ListMessages from './modules/Message'
import axios from 'axios'
import {setThreads} from './modules/actions'
import store from './modules/store'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'

const ThreadMessages=()=>{

  return <div className=" w-100 col-sm-8"><ListMessages  thread={{
    "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "subject" : "Meeting Today!",
    "time" : "2015-07-20T15:49:04-07:00",
    "read" : true,
    "deleted" : true,
    "creator" : {
    "id" : "d290f1ee-6c54-4b01-90b6-d701748f0851",
    "email" : "example@dzconseil.com",
    "username" : "administrator"
    },
    "messages" : [ {
    "id" : "d290f1ee-6c52-4b02-90e6-d701748f9854",
    "body" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et sapien facilisis, semper nunc a, pellentesque ex. Ut convallis odio vestibulum dui posuere commodo.",
    "time" : "2015-07-20T15:49:04-07:00",
    "creator" : {
      "id" : "d290f1ee-6c54-4b01-90b6-d701748f0851",
      "email" : "example@dzconseil.com",
      "username" : "administrator"
    }
    } ]
    }}/></div>


}



const ThreadsShow =({match})=>{

  return <div className="w-100 col-sm-9 row">  
  <div className="w-100 col-sm-4 list-threads" ><ListThreads /></div>
  <Route path={`${match.path}/:id`} component={ThreadMessages}/>
 </div>
}
const Compose =()=>{
   return <div className="w-100 col-sm-9">  
  <h5>Send Mail</h5>
  <div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text">@</span>
  </div>
  <input type="email" className="form-control" placeholder="name@example.com" aria-label="Username" aria-describedby="basic-addon1" />
  <br/>
  </div>

  <div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text">@</span>
  </div>
  <textarea className="form-control" rows="4" aria-label="With textarea"></textarea>
  <br/>


  </div>
  <button class="btn btn-primary" >send</button>  
  </div>
}
function App() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchData= async () => {
    const result = await axios(
      'https://virtserver.swaggerhub.com/dzconseil/challenge/1.0.0/threads/',
    );
    
    setData(result.data);
    store.dispatch(setThreads(result.data))
    console.log(store.getState())
  }; fetchData();},[]);

  return (<Router>
    <div className="w-100 container-fluid row ">
      
       <div className=" w-100 col-sm-3" ><SideBar/></div>
       <Switch>
         <Route path="/compose" strict component={Compose}/>

       <Route path="/:etat" strict component={ThreadsShow}/> 
       </Switch> 
    
    </div>
    </Router>
  );
}

export default App;
