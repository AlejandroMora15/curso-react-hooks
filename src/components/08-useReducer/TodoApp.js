import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm'
import { TodoList } from './List/TodoList'
import './styles.css'
import { todoReducer } from './todoReducer'

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init)
    const [ {description} , handleInputChange, reset] = useForm({description: ''})

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

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

    const handleSubmit = e => {
        e.preventDefault()

        if(description.trim().length <= 1) return

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action)
        reset()
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
                <div className='col-5'>
                    <h4>Agregar TODO</h4>
                    <hr />
                    <form 
                        onSubmit={handleSubmit}
                        className='d-grid gap-2'
                    >
                        <input
                            type='text'
                            name='description'
                            className='form-control'
                            placeholder='Descripción'
                            autoComplete='off'
                            value={description}
                            onChange={handleInputChange}
                        />
                        <button 
                            type='submit'
                            className='btn btn-success mt-1 btn-block'
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
