import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../Context/AppContext'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const { user, setShowLogIn } = useContext(AppContext)
  const navigate = useNavigate()
  
  const onClickHandler = () => {
    if(user) {
      navigate('/result')
    } else {
      setShowLogIn(true);
    }
  }

  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-sm font-medium text-indigo-600 ring-1 ring-inset ring-indigo-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span>AI-Powered Text to Image Generator</span>
            <svg className="ml-2 h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
          </motion.div>
          
          {/* Heading */}
          <motion.h1 
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Transform your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">imagination</span> into stunning images
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Harness the power of AI to create beautiful, unique images from text in seconds. 
            Simply describe what you want to see and watch your ideas come to life.
          </motion.p>
          
          {/* CTA Button */}
          <motion.div
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button
              onClick={onClickHandler}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-3 text-white shadow-xl transition-all duration-300 ease-out hover:shadow-indigo-500/25"
            >
              <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
              <span className="relative flex items-center font-medium">
                Generate Images
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            <a href="#how-it-works" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </motion.div>
          
          {/* Sample Images */}
          <motion.div 
            className="mt-16 flow-root"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-3">
              {Array(6).fill('').map((_, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-md"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <img
                    src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
                    alt={`Generated sample ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-2 left-2 text-xs text-white">Sample {index + 1}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <p className="mt-4 text-center text-sm text-gray-500">
              Examples of AI-generated images from our platform
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
