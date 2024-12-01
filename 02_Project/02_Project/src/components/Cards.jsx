import React from 'react'

function Cards(props) {
  console.log("props", props)
  return (
    <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
          <img
            src="https://play-lh.googleusercontent.com/mwYHnbn1WwnB62PNOnKlL9X3g1ftPVQABo_5WsuZ1H9woO6_yfCZX4SyRf-lLzbPuQY"
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">Lorem              
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
                soluta amet corporis accusantium aliquid consectetur eaque!
              </p>
            </div>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
            >
                Read Me
            </button>
          </div>
        </div>
  )
}

export default Cards
