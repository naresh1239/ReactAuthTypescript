import React from 'react'
import type { RootState } from './states/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './states/CounterSlice'
import { ddecrement, dincrement } from './states/DubleReducer'


const App = ()=> {
  const count = useSelector((state: RootState) => state.counter.value)
  const Duble = useSelector((state: RootState) => state.Duble.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
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
second
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(dincrement())}
        >
          Increment
        </button>
        <span>{Duble}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(ddecrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default App;