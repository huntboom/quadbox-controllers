import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import { store } from '../../app/store.js'


export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const statebutton = console.log(store.getState())
  return (
    <div>
      <div>
        <button
          aria-label="log current state"
            onClick={statebutton}
        >Log Current State
        </button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
