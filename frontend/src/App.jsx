import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Home from './pages/main/Home';

function App() {
  
  return (
    <>
    <Routes>
      <Route exact path="/"  element={<Home />}></Route>
    </Routes>
    </>
  )
}

export default App
