import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'
import { AppContext } from '../Context/AppContext'

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')

  const { generatedImages } = useContext(AppContext)

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    setLoading(true)

    try {
      const image = await generatedImages(input)

      if (image) {
        setIsImageLoaded(true)
        setImage(image)
      }
    } catch (error) {
      console.error('Error generating image:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-[80vh] py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-12"
      >
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
          AI Image Generator
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {isImageLoaded 
            ? "Your image has been created. You can download it or generate another one." 
            : "Describe what you'd like to create and our AI will bring your vision to life."}
        </p>
      </motion.div>

      <div className="flex flex-col items-center space-y-8 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-lg"
        >
          <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-lg relative">
            {loading ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm">
                <div className="flex flex-col items-center">
                  <svg className="animate-spin h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <p className="mt-4 text-white font-medium">Creating your masterpiece...</p>
                  <div className="w-48 h-1 mt-4 rounded-full bg-gray-700 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 animate-progressBar"></div>
                  </div>
                </div>
              </div>
            ) : (
              <img 
                src={image} 
                alt="Generated image" 
                className="h-full w-full object-cover"
              />
            )}
          </div>
          
        {isImageLoaded && (
  <div className="absolute -right-4 -bottom-4 bg-white rounded-full p-3 shadow-lg">
    <a 
      href={image} 
      download 
      onClick={async () => {
        try {
          await fetch("http://localhost:5000/api/image/save", { // 👈 make save route
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              token: localStorage.getItem("token"),
            },
            body: JSON.stringify({
              userId: user._id,
              prompt: input,
              imageUrl: image,
            }),
          });
        } catch (err) {
          console.error("Save failed", err);
        }
      }}
      className="flex items-center justify-center h-12 w-12 bg-indigo-600 rounded-full text-white hover:bg-indigo-700 transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    </a>
  </div>
)}
        </motion.div>

        <motion.form 
          onSubmit={onSubmitHandler}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="w-full max-w-xl"
        >
          {!isImageLoaded ? (
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Describe what you want to generate..."
                  className="pl-10 pr-20 py-4 w-full rounded-full border-0 bg-white/90 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                  <button
                    type="submit"
                    disabled={loading || !input.trim()}
                    className="inline-flex items-center gap-x-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Generate
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <p className="text-xs text-gray-500 text-center">
                Try prompts like "a surreal landscape with floating islands" or "a cyberpunk city at night"
              </p>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setIsImageLoaded(false)}
              className="mx-auto flex items-center gap-x-2 rounded-full px-5 py-3 text-sm font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-sm hover:from-indigo-600 hover:to-purple-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Generate Another Image
            </button>
          )}
        </motion.form>
      </div>
    </div>
  )
}

export default Result
