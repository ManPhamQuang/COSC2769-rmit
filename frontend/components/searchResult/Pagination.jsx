import React from 'react'

const Pagination = () => {
  return (
    <div className="mt-20 justify-self-center">
      <div className="flex text-gray-700">
        <div className="h-8 w-8 mr-1 flex justify-center items-center rounded-full p-2 border cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left w-4 h-4">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </div>
        <div className="flex h-8 font-medium ">
            <div className="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  border-t-2 border-transparent">1</div>
            <div className="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  border-t-2 border-indigo-600  ">2</div>
            <div className="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  border-t-2 border-transparent">3</div>
            <div className="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  border-t-2 border-transparent">...</div>
            <div className="w-8 h-8 md:flex flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in border-t-2 border-transparent">5</div>
        </div>
        <div className="h-8 w-8 ml-1 flex justify-center items-center rounded-full p-2 border cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right w-4 h-4">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </div>
    </div>
    </div>
  )
}

export default Pagination
