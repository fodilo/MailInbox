import { createStore } from 'redux'
import { threads } from './reducers'

const store = createStore(threads)

export default store
