import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

const store = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    onIncrementBy2={() => store.dispatch({ type: 'INCREMENTBY2' })}
    onDecrementBy2={() => store.dispatch({ type: 'DECREMENTBY2' })}
  />,
  rootEl
)

render()
store.subscribe(render)
