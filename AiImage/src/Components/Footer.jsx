import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4">
            <img
              className="h-10"
              src={assets.logo}
              alt="Company logo"
            />
            <p className="text-sm leading-6 text-gray-600">
              Transform your ideas into stunning visuals with the power of AI.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <img src={assets.facebook_icon} alt="Facebook" className="h-6 w-6 hover:opacity-80 transition-opacity" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <img src={assets.instagram_icon} alt="Instagram" className="h-6 w-6 hover:opacity-80 transition-opacity" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <img src={assets.twitter_icon} alt="Twitter" className="h-6 w-6 hover:opacity-80 transition-opacity" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Product</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link to="/" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/result" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      My Images
                    </Link>
                  </li>
                  <li>
                    <Link to="/buy" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Buy Credits
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500">
            &copy; {currentYear} ImageGen AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
