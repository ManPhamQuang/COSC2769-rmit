import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext/AuthContext';

const MainNavBar = () => {
  const {state, dispatch} = useContext(AuthContext);
  console.log(state.user);
  console.log(state.token);
  return (
    <div className="bg-indigo-50 h-18 py-3 px-12 flex justify-between items-center text-base">
      <div className="flex items-center font-medium text-indigo-900">
        <img
          className="h-6 mr-8 cursor-pointer"
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
          alt=""
        />
        <div className="dropdown mr-3 inline-block relative">
            <div className=" py-2 px-4 inline-flex items-center">
              <span className="mr-1">Products</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <ul className="dropdown-menu absolute hidden text-gray-600 pt-1 rounded">
              <li className=""><a className=" bg-gray-50 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap rounded-t" href="/">Product 1</a></li>
              <li className=""><a className="bg-gray-50 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap" href="/">Product 2</a></li>
              <li className=""><a className="bg-gray-50 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap rounded-b" href="/">Product 3</a></li>
            </ul>
        </div>
      </div>
      <div className=" flex items-center ">
        <button className="bg-indigo-500 text-white rounded-full py-2 px-4 cursor-pointer">Sign In</button>
        {/* {token && (
          <h1>{token}</h1>
        )} */}
      </div>
    </div>
  )
}

export default MainNavBar
