import React from 'react'

const page = () => {
  return (
        <div className="min-h-screen bg-black text-white p-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black">
            Welcome to your history
          </h1>

          <p className="text-zinc-400 mt-2">You are authenticated.</p>
        </div>
      </div>
    </div>
  )
}

export default page
