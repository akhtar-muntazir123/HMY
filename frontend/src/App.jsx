import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Signup from './components/Signup'
import Login from './components/Login'
import Cart from './components/Cart'
import Card from './components/Cards'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Content from './components/Content'
function App() {
 const [category,setCategory]=useState('')
  return (
     <>
     <BrowserRouter>
     <Nav setCategory={setCategory}/>
      <Routes>
        {/* <Route path="/" element={<Card category={category}/>}></Route> */}
        <Route path="/" element={<Content category={category}/>}></Route>
        <Route path="/register" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/new-item" element={<h1>new item</h1>}></Route>
        <Route path="/update-item" element={<h1>update item</h1>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      <Footer/>
     </BrowserRouter>    
     </>
  )
}

export default App
