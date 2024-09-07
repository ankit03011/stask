import React from 'react'

function GotoHome() {
  return (
    <div>
        <button className="flex items-center text-white bg-gray-900 rounded-lg px-4 py-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="ml-2">Back</span>
      </button>
    </div>
  )
}

export default GotoHome