import { Link, useLoaderData, useParams } from "react-router-dom";
import MapWithMarker from "../../components/MapWithMarker/MapWithMarker";
import { Helmet } from "react-helmet-async";
import { IoLocationOutline } from "react-icons/io5";
import { BiHomeAlt2 } from "react-icons/bi";
import { PiBathtubThin, PiBedLight } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";


const ViewDetail = () => {

  const assets = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const asset = assets.find(asset => asset.id === idInt);
  console.log(assets, id);
  const { description, estate_title, status, facilities, segment_name, location, area, price, latitude, longitude } = asset;

  return (
    <>
      <Helmet>
        <title>SR | view detail</title>
      </Helmet>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
        <div className="div grid grid-rows-2 gap-2">
         
            <div className="pt-4 h-full"><div className="object-cover rounded-lg bg-cover h-full w-full flex items-center justify-center" style={{ backgroundImage: `url(${asset.image})` }}>

              <div className="bg-[#ffffffb3] rounded-lg">
                <h1 className="text-xl lg:3xl font-extrabold text-black text-center items-center p-4">{estate_title}</h1>

              </div>
            </div></div>
         
          <div>
            <div>
              <MapWithMarker latitude={latitude} longitude={longitude} />
            </div>
          </div>
        </div>
        <div className="div px-8">
          <h2 className="text-3xl font-bold mt-3 mb-4">Property Details</h2>
          <div className="badge border-none text-2xl font-bold"><span><IoLocationOutline className="-ml-3"></IoLocationOutline></span>{location}</div>
          <h2 className="card-title text-md font-bold my-2"> Title:  
            {estate_title}
          </h2>
          <h2 className="card-title text-md font-semibold"> Types: 
            {segment_name}
          </h2>

          <div className="badge border-none text-blue-600 text-3xl font-bold pt-6 flex gap-0 lg:gap-8">
            {price}
            <button className="rounded-xl p-1 px-4 text-blue-600 flex items-center gap-3 text-2xl"> <GoDotFill className="text-2xl "></GoDotFill> {status}</button>
            </div>
          <div className="icon flex justify-between gap-3 mt-5 font-3xl items-center">
            <div className="badge border-none items-center gap-3 text-xl"><span><BiHomeAlt2 className="text-2xl"></BiHomeAlt2></span>{area}</div>
         
            <div className="items-center font-3xl">
              {facilities.slice(0, 1).map((facility, index) => (
                <div key={index} className="badge border-none gap-2 items-center">
                  <PiBedLight className="text-4xl font-extrabold"></PiBedLight> {facility.split(' ')[0]}
                </div>
              ))}
            </div>
       
            <div className="items-center font-3xl">
              {facilities.slice(1, 2).map((facility, index) => (
                <div key={index} className="badge border-none gap-3 items-center">
                  <PiBathtubThin className="text-4xl font-extrabold"></PiBathtubThin> {facility.split(' ')[0]}
                </div>
              ))}
            </div>
          </div>
          <p className="my-4 text-xl"> <span className="text-2xl font-semibold">Details: </span>{description}</p>

          <div>
            <h1 className="text-2xl font-semibold mb-4">Available facilities:</h1>
            {facilities.map((facility, index) => (
              <li key={index} className="list-item text-xl mb-4 font-semibold">
                {facility}
              </li>
            ))}
          </div>
          <div className="max-w-md mt-5">
            <Link to="/booking">
              <button className="btn bg-orange-500 mr-6">Mark your Visit</button>
            </Link>
            <button className="btn bg-blue-950 text-white hover:text-blue-950">Call our Agent</button>
          </div>
        </div>
      </div>
    </>
  );

}


export default ViewDetail;








