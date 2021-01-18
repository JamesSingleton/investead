import {FaTwitter, FaEnvelope } from 'react-icons/fa'

const Member = () => {
  return (
    <div className="p-4 lg:w-1/2">
      <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200" />
        <div className="flex-grow sm:pl-8">
          <h2 className="title-font font-medium text-lg text-gray-900">Holden Caulfield</h2>
          <h3 className="text-gray-500 mb-3">UI Developer</h3>
          <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          <span className="inline-flex">
            <a className="text-gray-500">
              <FaEnvelope />
            </a>
            <a className="ml-2 text-gray-500">
              <FaTwitter />
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Member;