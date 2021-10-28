import React from 'react'
import { connect } from 'react-redux'
import { TYPE_TODO_DELETE } from '../store/types/todo'
import ItemTodo from './ItemTodo'

const ListTodo = ({todos, deleteTestbyId}) => {
    return (

        <ul >
            {todos.map(t=><ItemTodo key={t.id} task={t}
            onDeleteTask={deleteTestbyId}/>)}

        </ul>
    )
}

const  ListTodoStore = connect(
    (state)=>({todos:state}),
    (dispatch)=>({
        deleteTestbyId:(taskId)=>{
            return dispatch({
                type: TYPE_TODO_DELETE,
                payload: {taskId}
            })
        }
    })
)

export default ListTodoStore(ListTodo)
