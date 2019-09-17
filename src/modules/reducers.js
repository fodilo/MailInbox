import {
    SET_THREADS
  } from './actions'
import axios from 'axios'


export function threads (state = [], action){
    switch(action.type){        
        case 'SET_THREADS':
          return action.threads
    default:
       return state;
  }
}

