import React, { useEffect, useReducer } from 'react'
import { TodoList } from './List/TodoList'
import './styles.css'
import { TodoAdd } from './TodoAdd'
import { todoReducer } from './todoReducer'

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init)
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleAddTodo = newTodo => {
        dispatch({type: 'add', payload: newTodo})
    }

    const handleDelete = todoId => {
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action)
    }

    const handleToggle = todoId => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    return (
        <div>
            <h1>TodoApp: ({todos.length})</h1>
            <hr />
            <div className='row'>
                <TodoList 
                    todos={todos}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                />
                <TodoAdd 
                    handleAddTodo={handleAddTodo}
                />
            </div>
        </div>
    )
}
