import React from 'react';
import '../App.css'


// buttons of the side bar
const SideBarButtons=(props)=>{
    return <div className="btn btn-block "><i className="material-icons"  style={{fontSize:'18px'}}>{props.icon}</i>&nbsp; &nbsp;<span class="float-left" >{props.text}</span> <span className="float-right">{props.count}</span></div>
}
const ComposeButton=()=>{
    return <div className="btn btn-primary btn-block p-3"> <span className="pb-4">Compose</span>  <i  class="material-icons" style={{fontSize:'18px'}}> edit </i></div>
}

/** Side Bar component */
const SideBar= ()=>{
    return <div className=" h-100">
            <ComposeButton/>
            <div className="bg-dark text-white h-100">
            <SideBarButtons icon="inbox" text="Inbox" count="1"/>
            <SideBarButtons icon="drafts" text="Drafts" count="2"/>
            <SideBarButtons icon="send" text="Sent" count="3"/>
            <SideBarButtons icon="delete" text="Trash" count="4"/>
            </div>

         </div>
}

export default SideBar