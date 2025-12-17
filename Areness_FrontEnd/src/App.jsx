import { useState } from 'react'
import { NavBar1 } from './Routes/Navbar/NavBar1'
import { AllRoutes } from './Routes/Allroutes/AllRoutes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar1/>
      <AllRoutes/>
    </>
  )
}

export default App
