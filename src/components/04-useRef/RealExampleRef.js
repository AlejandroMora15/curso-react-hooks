import React, { useEffect, useRef, useState } from 'react'
import '../02-useEffect/effect.css'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

export const RealExampleRef = () => {
    const isMounted = useRef(true)
    const [show, setShow] = useState(false)

    useEffect(() => {
        return () => {
            isMounted.current = false
        }
    }, [])

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr />
            { show && <MultipleCustomHooks /> }
            <button
                className='btn btn-primary mt-5'
                onClick={() => setShow(!show)}
            >
                Show/Hide
            </button>
        </div>
    )
}
