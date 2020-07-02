import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState('')

  function up () {
    const newCount = count + 1

    setCount(newCount)
  }

  function onSubmit (event) {
    event.preventDefault()

    console.log('the time is:', time)
  }

  function onChange (event) {
    setTime(event.target.value)
  }

  function reset () {
    setTime('')
  }

  return <div>
    <form onSubmit={onSubmit}>
      <h2>What time is it?</h2>

      <input onChange={onChange} value={time} /> 

      <div>
        <button>Submit</button>
        <button type='button' onClick={reset}>Reset</button>
      </div>
    </form>

    <button onClick={up}>Count up</button>
    {count}
  </div>
}

export default App;
