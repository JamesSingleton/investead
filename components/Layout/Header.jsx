import { FaHome } from "react-icons/fa";
import { WEBSITE_NAME } from "@/lib/constants";

const Header = () => {
  return (
    <header>
      <div className="relative bg-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/" className="flex justify-start lg:w:0 lg:flex-1">
              <FaHome className="w-10 h-10 text-white p-2 bg-indigo-600 rounded-full" />
              <span className="font-semibold text-4xl tracking-tight text-gray-900 ml-2 block md:hidden lg:block">
                {WEBSITE_NAME}
              </span>
            </a>
          </div>
          <nav className="hidden md:flex space-x-10">
            <div className="relative">
              <button
                type="button"
                className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-expanded="false"
              >
                <span>Solutions</span>
                <svg
                  className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            <a
              href="#"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Pricing
            </a>
            <a
              href="#"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Partners
            </a>
            <a
              href="#"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Company
            </a>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Sign in
            </a>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
