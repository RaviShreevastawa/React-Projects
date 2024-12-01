import React from 'react'
import Cards from './components/Cards'

function App() {
  let newArr = [10,20,30,40]

  const cat = {
    name : "Piku",
    color : "black"
  }
  return (
    <>
      <h2>Hello World</h2>
      <div className='flex p-4 justify-between'>
        <Cards  cat = {cat} newArr={newArr}/>
        <Cards  />
        <Cards  />
        <Cards  />
      </div>
    </>
  )
}

export default App
