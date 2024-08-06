import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './component/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-2xl bg-green-500 p-3 rounded-md">Vite coupled with Tailwind</h1>
      <Cards username='Rahulkrishnan Ravindran'/>
      <Cards username='Radhika Ravindran' post='Software Engg' />
      <Cards user name />
    </>
  )
}

export default App
