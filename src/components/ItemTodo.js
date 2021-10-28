import React from 'react'
import { Task } from '../models/task'

const ItemTodo = ({task=new Task() ,onDeleteTask}) => {
    const handLeClick= ()=>{
        if(window.confirm("Are you sure ?")===false) return () =>
        onDeleteTask(task.id)
    }

    return (
        <li>
            <input type="checkbox" value="task"/>
            {task.title}
            <button onClick={handLeClick}>Del</button>
        </li>
    )
}

export default ItemTodo
