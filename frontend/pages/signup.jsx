const Signup = () => {
  return (
    <div className="container mt-20 mx-auto px-4 h-full">
      <div className="flex content-center items-center justify-center h-full ">
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-indigo-50 border-0">
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div className="text-center my-6">
                <h6 className="text-indigo-600 text-xl font-bold ">
                  Sign up with credentials
                </h6>
              </div>
              <form>
              <div className="relative w-full mb-3 ">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Max"
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="madmax@example.com"
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="*******"
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Password Confirm
                  </label>
                  <input
                    type="password"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="*******"
                  />
                </div>
                <div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      id="customCheckLogin"
                      type="checkbox"
                      className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                    />
                    <span className="ml-2 text-sm font-semibold text-gray-700">
                      Become an instructor
                    </span>
                  </label>
                </div>
                <div className="text-center mt-6">
                  <button
                    className="bg-indigo-600 text-white active:bg-indigo-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                    type="button"
                  >
                    Sign up
                  </button>
                </div>
                
              </form>
            </div>
            <div className="rounded-t mb-0 px-6 pb-6">
            <hr className="mb-6 border-b-1 border-gray-400 w-4/5 mx-auto" />
              <div className="text-gray-500 text-center mb-3 font-bold">
                <small>Or sign up with</small>
              </div>
              <div className="btn-wrapper text-center">
                <button
                  className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                  type="button"
                  style={{ transition: "all .15s ease" }}
                >
                  <img
                    alt="..."
                    className="w-5 mr-1"
                    src="/linkedin-icon.svg"
                  />
                  LinkedIn
                </button>
                <button
                  className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                  type="button"
                  style={{ transition: "all .15s ease" }}
                >
                  <img
                    alt="..."
                    className="w-5 mr-1"
                    src="/google-icon.svg"
                  />
                  Google
                </button>
              </div>
              
            </div>
          </div>
          <div className="flex flex-wrap mt-6">
            <div className="w-full text-center">
              
                <small>  
                <a
                href="#pablo"
                onClick={e => e.preventDefault()}
                className="text-gray-300 hover:text-indigo-400"
              >Already have an account? Sign In instead </a></small>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
