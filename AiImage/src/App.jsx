import React, { useContext } from 'react'
import Home from './Pages/Home'
import BuyCredit from './Pages/BuyCredit'
import Result from './Pages/Result'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Login from './Components/Login'
import { AppContext } from './Context/AppContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const {showLogIn} = useContext(AppContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar/>
        <ToastContainer 
          position='bottom-right'
          theme="colored"
          autoClose={3000}
        />
        {showLogIn && <Login/>}
        <main className="py-6">
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/result' element={<Result/>}></Route>
            <Route path='/buy' element={<BuyCredit/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </div>
  )
}

export default App
