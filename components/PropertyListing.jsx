import {FaMapMarkerAlt} from 'react-icons/fa'

const PropertyListing = () => (
  <div className="bg-white relative rounded-lg transition-all shadow-lg max-w-sm">
    <div id="thumbnail" className="relative flex overflow-hidden bg-gray-900 rounded-t-lg">
      <img className="w-100 object-cover opacity-60 w-full" src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80"/>
      <div id="content" className="absolute">

      </div>
    </div>
    <div id="details" className="relative bg-white rounded-b-lg">
      <div id="content" className="p-5">
        <p className="text-sm leading-tight mb-2.5">Villa</p>
        <h4 className="text-lg leading-tight font-bold mb-2">Gorgeous Villa Bay View</h4>
        <p className="text-sm leading-tight mb-2 align-middle inline-block">
          <span className="inline-block align-middle">
          <FaMapMarkerAlt  />
          </span>
          1421 San Pedro St, Los Angeles, CA 90015
        </p>
        <ul className="list-none">
          <li className="inline-block mr-8">Beds: 4</li>
          <li className="inline-block mr-8">Baths: 2</li>
          <li className="inline-block">Sq Ft: 5200</li>
        </ul>
      </div>
    </div>

  </div>
);

export default PropertyListing;