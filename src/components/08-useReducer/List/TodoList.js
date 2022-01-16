import React from 'react'
import { TodoItemList } from './TodoItemList'

export const TodoList = ({todos, handleDelete, handleToggle}) => {
    return (
        <div className='col-7'>
            <ul className='list-group list-group-flush'>
                {
                    todos.map( (todo, i) => (
                        <TodoItemList
                            key={i}
                            todo={todo}
                            i={i}
                            handleDelete={handleDelete}
                            handleToggle={handleToggle}
                        />
                    ))
                }
            </ul>
        </div>
    )
}
