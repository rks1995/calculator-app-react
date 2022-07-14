import { useState } from 'react'

function App() {
  const [value, setValue] = useState('')

  const calculation = () => {
    setValue(eval(value)) // eslint-disable-line
  }

  const handleClick = (e) => {
    let val = e.target.innerText
    if (val === 'C') setValue('') //delete value
    else if (val === '=') calculation()
    else setValue(value + val)
  }

  return (
    <div className='calculator-app'>
      <h2 className='heading'>Calculate</h2>
      <div className='input-field'>
        <input type='text' value={value} readOnly />
      </div>
      <div className='grid'>
        <button className='btn red' onClick={(e) => handleClick(e)}>
          C
        </button>
        <button className='btn blue' onClick={(e) => handleClick(e)}>
          (
        </button>
        <button className='btn blue' onClick={(e) => handleClick(e)}>
          )
        </button>
        <button className='btn yellow' onClick={(e) => handleClick(e)}>
          /
        </button>
        <button className='btn blue' onClick={(e) => handleClick(e)}>
          7
        </button>
        <button className='btn blue' onClick={(e) => handleClick(e)}>
          8
        </button>
        <button className='btn blue' onClick={(e) => handleClick(e)}>
          9
        </button>
        <button className='btn yellow' onClick={(e) => handleClick(e)}>
          *
        </button>
        <button className='btn blue' onClick={(e) => handleClick(e)}>
          4
        </button>
        <button className='btn blue' onClick={(e) => handleClick(e)}>
          5
        </button>
        <button className='btn blue' onClick={(e) => handleClick(e)}>
          6
        </button>
        <button className='btn yellow' onClick={(e) => handleClick(e)}>
          +
        </button>
        <button className='btn blue' onClick={(e) => handleClick(e)}>
          1
        </button>
        <button className='btn blue' onClick={(e) => handleClick(e)}>
          2
        </button>
        <button className='btn blue' onClick={(e) => handleClick(e)}>
          3
        </button>
        <button className='btn yellow' onClick={(e) => handleClick(e)}>
          -
        </button>
        <button className='btn blue' onClick={(e) => handleClick(e)}>
          0
        </button>
        <button className='btn blue' onClick={(e) => handleClick(e)}>
          00
        </button>
        <button className='btn blue' onClick={(e) => handleClick(e)}>
          .
        </button>
        <button className='btn green' onClick={(e) => handleClick(e)}>
          =
        </button>
      </div>
    </div>
  )
}

export default App
