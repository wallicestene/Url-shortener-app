import React from 'react'
import Home from './Home'
import {Toaster} from "react-hot-toast" 
function App() {
  return (
    <div>
      <Home/>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
  )
}

export default App