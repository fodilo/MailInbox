import React, {useState, useEffect} from 'react';
import store from './store'
import {Link} from  'react-router-dom'

/** threads which has date,subject, creator and is read or not */
const Thread = (props)=>{ 
    //the date 
     function dateComp(){
        let date = new Date(props.date)
        let today=new Date()
        let dateComp= ''
        if (date.getDate()===today.getDate() && date.getMonth()===today.getMonth() && date.getFullYear()===today.getFullYear())
           {dateComp= 'today '+ date.getHours()+':'+date.getMinutes()
        console.log("test")
        }
        else dateComp=date.getDate()+'/'+date.getMonth()
        return dateComp
     }
    // show if the thread is read
     const IsRead=()=>{
    let read=<i></i>
    if(props.read===true)
    {read=<i className="float-right material-icons" style={{fontSize:'20px',color:'blue'}}>fiber_manual_record</i>}
    return read
    }

    return <div className="m-2 pb-4 block bold"><div className="block"><span className="font-weight-bold float-left">{props.subject}</span>
     <IsRead/></div>
     <br/>
        <div className="block"><span className="float-left">{props.creator}</span>
        <span className="float-right">{dateComp()}</span></div>
    </div>
}

const ListThreads = (props,match)=>{
    const [threads, setThreads] = useState(store.getState());
    useEffect(() => {
        setThreads(store.getState());
      }, []);
    let i=0
    let arr=[]
    for (i=0;i<threads.length;i++)
    {
        arr.push(<Link to={`${match.path}/${threads[i].id}`}><Thread key={i} subject={threads[i].subject} read={threads[i].read} creator={threads[i].creator.username} date={threads[i].time} /></Link>);
        console.log(i,threads[i])
    }
    
    return arr
}


export default ListThreads