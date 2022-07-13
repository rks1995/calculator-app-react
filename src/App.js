function App() {
  return (
    <div className='calculator-app'>
      <h2 className='heading'>Calculate</h2>
      <div className='input-field'>
        <input type='text' />
      </div>
      <div className='grid'>
        <button className='btn red'>C</button>
        <button className='btn blue'>(</button>
        <button className='btn blue'>)</button>
        <button className='btn yellow'>/</button>
        <button className='btn blue'>7</button>
        <button className='btn blue'>8</button>
        <button className='btn blue'>9</button>
        <button className='btn yellow'>*</button>
        <button className='btn blue'>4</button>
        <button className='btn blue'>5</button>
        <button className='btn blue'>6</button>
        <button className='btn yellow'>+</button>
        <button className='btn blue'>1</button>
        <button className='btn blue'>2</button>
        <button className='btn blue'>3</button>
        <button className='btn yellow'>-</button>
        <button className='btn blue'>0</button>
        <button className='btn blue'>00</button>
        <button className='btn blue'>.</button>
        <button className='btn green'>=</button>
      </div>
    </div>
  )
}

export default App
