import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({ handleAddTodo }) => {
    const [ {description} , handleInputChange, reset] = useForm({description: ''})

    const handleSubmit = e => {
        e.preventDefault()
        
        if(description.trim().length <= 1) return

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }
        
        handleAddTodo(newTodo)
        reset()
    }

    return (
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
    )
}
