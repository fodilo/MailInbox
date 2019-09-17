import React from 'react';
import '../App.css'
import { BrowserRouter as Router, Link } from "react-router-dom";


// buttons of the side bar
const SideBarButtons=(props)=>{
    return <div className="btn btn-block "><i className="material-icons"  style={{fontSize:'18px'}}>{props.icon}</i>&nbsp; &nbsp;<span className="float-left" >{props.text}</span> <span className="float-right">{props.count}</span></div>
}
const ComposeButton=()=>{
    return <div className="btn btn-primary btn-block p-3"> <span className="pb-4">Compose</span>  <i  className="material-icons" style={{fontSize:'18px'}}> edit </i></div>
}

/** Side Bar component */
const SideBar= ()=>{
    return <Router><div className=" h-100">
            
            <Link style={{ textDecoration: 'inherit' ,color:"inherit"}} to="/compose" ><ComposeButton/></Link>
            <div className="bg-dark text-white h-100 ">
            <Link style={{ textDecoration: 'inherit' ,color:"inherit"}} to="/inbox" > <SideBarButtons icon="inbox" text="Inbox" count="1"/> </Link>
            <Link style={{ textDecoration: 'inherit' ,color:"inherit"}} to="/trash" ><SideBarButtons icon="drafts" text="Drafts" count="2"/></Link>
            <Link style={{ textDecoration: 'inherit' ,color:"inherit"}} to="/sent"><SideBarButtons icon="send" text="Sent" count="3"/></Link>
            <Link style={{ textDecoration: 'inherit' ,color:"inherit"}} to="/trash"><SideBarButtons icon="delete" text="Trash" count="4"/></Link>
            </div>

         </div></Router>
}

export default SideBar