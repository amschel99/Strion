import Home from './pages/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import WhitePaper from './components/Whitepaper'
import Paper from './components/Paper'



function App() {
 

  return (
<BrowserRouter>

<Routes>
<Route path='/' element={<Home/>}>

<Route index element={<WhitePaper/>}>

</Route>
<Route path='whitepaper' element={<Paper/>} />
</Route>
</Routes>
</BrowserRouter>
  )
}

export default App
