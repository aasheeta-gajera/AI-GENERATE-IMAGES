import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'

const Navbar = () => {
  const { user, setShowLogIn, logout, credit } = useContext(AppContext)
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="py-4">
      <div className="flex items-center justify-between">
        <Link to='/' className="flex items-center">
          <img src={assets.logo} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          {user ? (
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigate('/buy')} 
                className="flex items-center gap-2 bg-indigo-100 hover:bg-indigo-200 px-4 py-2 rounded-full transition-all duration-300"
              >
                <img className="w-5" src={assets.credit_star} alt="" />
                <span className="font-medium text-indigo-800">
                  {credit} Credits
                </span>
              </button>
              
              <div className="relative group flex items-center gap-3">
                <p className="text-gray-700">Hi, {user.name}</p>
                <div className="relative">
                  <img 
                    src={assets.profile_icon} 
                    className="w-10 h-10 rounded-full border-2 border-indigo-200 object-cover cursor-pointer" 
                    alt="Profile" 
                  />
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 invisible group-hover:visible transition-all duration-200 opacity-0 group-hover:opacity-100">
                    <button 
                      onClick={() => navigate('/')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
                    >
                      Dashboard
                    </button>
                    <button 
                      onClick={() => navigate('/result')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
                    >
                      My Images
                    </button>
                    <button 
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-6">
              <button 
                onClick={() => navigate('/buy')}
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                Pricing
              </button>
              <button 
                onClick={() => setShowLogIn(true)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full font-medium shadow-sm transition-all duration-300"
              >
                Log In
              </button>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 hover:text-indigo-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-3 pb-3">
          {user ? (
            <>
              <div className="flex items-center gap-2 py-2">
                <img src={assets.profile_icon} className="w-8 h-8 rounded-full" alt="Profile" />
                <p className="text-gray-700 font-medium">Hi, {user.name}</p>
              </div>
              <div className="border-t border-gray-200 pt-2">
                <button 
                  onClick={() => { navigate('/buy'); setMobileMenuOpen(false); }}
                  className="flex items-center w-full gap-2 py-2 text-indigo-600"
                >
                  <img className="w-4" src={assets.credit_star} alt="" />
                  <span>{credit} Credits</span>
                </button>
                <button 
                  onClick={() => { navigate('/'); setMobileMenuOpen(false); }}
                  className="block w-full text-left py-2 text-gray-700"
                >
                  Dashboard
                </button>
                <button 
                  onClick={() => { navigate('/result'); setMobileMenuOpen(false); }}
                  className="block w-full text-left py-2 text-gray-700"
                >
                  My Images
                </button>
                <button 
                  onClick={() => { logout(); setMobileMenuOpen(false); }}
                  className="block w-full text-left py-2 text-red-600"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <button 
                onClick={() => { navigate('/buy'); setMobileMenuOpen(false); }}
                className="block w-full text-left py-2 text-gray-700"
              >
                Pricing
              </button>
              <button 
                onClick={() => { setShowLogIn(true); setMobileMenuOpen(false); }}
                className="w-full bg-indigo-600 text-white py-2 rounded-full font-medium"
              >
                Log In
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar
