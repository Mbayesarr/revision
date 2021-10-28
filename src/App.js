import "./App.css"
import React from 'react'
import store from './store'
import {Provider} from "react-redux" 
import ListTodo from './components/ListTodo'
const App = () => {
    return (
        <Provider store={store}>
            Hello
            <hr></hr>
            <ListTodo/>
        </Provider>
    )
}

export default App