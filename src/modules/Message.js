import React from 'react';
const Message=(props)=>{
    return <div className="card">
    <div className="card-body">
      
      <h6 className="card-subtitle mb-2 text-muted block-inline">{props.creator}  <small className="float-right text-muted">{props.date}</small></h6> 
      <p className="card-text">{props.body}</p>
    </div>
  </div>

}

const ListMessages=(props,match)=>{
  let arr = []
  let i=0
 
  for (i=0;i<props.thread.messages.length;i++)
  {
      arr.push(<Message key={i} body={props.thread.messages[i].body} creator={props.thread.messages[i].creator.username} date={props.thread.messages[i].time} />)
  }
  return      <div > <h5 className="card-header">{props.thread.subject} <i className="float-right material-icons" style={{fontSize:'25px',color:'#e74c3c'}}>delete</i> </h5>
  {arr}</div>

}
export default ListMessages