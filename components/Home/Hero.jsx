import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1555636222-cae831e670b3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1656&q=80"
                alt="People working on laptops"
              />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="text-indigo-600">Invest</span>
                <span className="text-white"> in your forever home</span>
              </h1>

              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <form
                  action="#"
                  className="sm:max-w-xl sm:mx-auto md:w-full lg:mx-0"
                >
                  <div>
                    <label htmlFor="search-input" className="sr-only">
                      Enter an address, neighborhood, city, or ZIP code
                    </label>
                    <div className="mt-1 relative rounded-md shadow-md">
                      <input
                        type="text"
                        name="search-input"
                        id="search-input"
                        placeholder="Enter an address, neighborhood, city, or ZIP code"
                        className="py-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                      />
                      <div className="absolute px-4 inset-y-0 right-0 flex items-center">
                        <button type="submit" className="text-gray-700">
                          <span className="sr-only">Search</span>
                          <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
            Our Partners
          </p>
          <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                alt="Tuple"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                alt="Mirage"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                alt="StaticKit"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                alt="Transistor"
              />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                alt="Workcation"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
