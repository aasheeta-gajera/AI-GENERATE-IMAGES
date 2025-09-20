import React, { useContext, useState } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../Context/AppContext'
import { motion } from 'motion/react'

const BuyCredit = () => {
  const { user, setShowLogIn } = useContext(AppContext)
  const [hoveredPlan, setHoveredPlan] = useState(null)

  const handlePurchase = (plan) => {
    if (!user) {
      setShowLogIn(true)
      return
    }
    // Add purchase logic here
  }

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 mb-6"
          >
            <span>Credits Pricing</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Choose the perfect plan for your creativity
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Purchase credits to generate more AI images. The more credits you buy, the more you save.
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
        >
          {plans.map((plan, index) => (
            <div 
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              <div className={`
                rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10
                h-full flex flex-col justify-between
                transition-all duration-300 ${hoveredPlan === index ? 'shadow-xl ring-indigo-300 scale-105 bg-white' : 'bg-white/60'}
              `}>
                <div>
                  <div className="flex items-center justify-between gap-x-4">
                    <h3 
                      className={`text-lg font-semibold leading-8 ${hoveredPlan === index ? 'text-indigo-600' : 'text-gray-900'}`}
                    >
                      {plan.id}
                    </h3>
                    <div className={`
                      rounded-full p-1.5
                      ${hoveredPlan === index ? 'bg-indigo-600' : 'bg-gray-100'}
                    `}>
                      <img 
                        src={assets.logo_icon} 
                        alt="" 
                        className="h-5 w-5"
                      />
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {plan.desc}
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">${plan.price}</span>
                    <span className="text-sm font-semibold leading-6 text-gray-600">for {plan.credits} credits</span>
                  </p>
                  <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                    <li className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      Generate {plan.credits} high-quality images
                    </li>
                    <li className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      Save all generated images
                    </li>
                    <li className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      Commercial usage rights
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => handlePurchase(plan)}
                  className={`
                    mt-8 block w-full rounded-md px-3 py-3 text-center text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                    ${hoveredPlan === index 
                      ? 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600' 
                      : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'}
                    transition-colors duration-300
                  `}
                >
                  {user ? 'Purchase Now' : 'Sign In to Purchase'}
                </button>
              </div>

              {index === 1 && (
                <div className="absolute -top-3 left-0 right-0 mx-auto w-max rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-3 py-1 text-center text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}
            </div>
          ))}
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mx-auto mt-10 max-w-2xl text-center text-sm leading-6 text-gray-500"
        >
          All plans include access to our API, download options, and unlimited storage for your generated images.
          <br />Need more? <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Contact us</a> for custom enterprise solutions.
        </motion.p>
      </div>
    </div>
  )
}

export default BuyCredit
