export const SET_THREADS = 'SET_THREADS'
export const CREATE_MESSAGE = 'CREATE_MESSAGE'


/** get threads from the url */
export function setThreads (threads){
   return{ type:'SET_THREADS',
   threads
}
}

/** Create a message */
export function createMessage (){
    return { type:'CREATE_MESSAGE',
    message:'', 
    creator:'',
    uuid:null}
 }
