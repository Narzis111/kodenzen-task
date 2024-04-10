import { Link, useLoaderData, useParams } from "react-router-dom";
import MapWithMarker from "../../components/MapWithMarker/MapWithMarker";
import { Helmet } from "react-helmet-async";


const ViewDetail =() => {
  
  const assets = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const asset = assets.find(asset => asset.id === idInt);
    console.log(assets, id); 
    const {description, estate_title, location, area, price, latitude, longitude} = asset;
    console.log(asset);
    return (
    <>
      <Helmet>
                <title>SR | view detail</title>
             </Helmet>
     
      <div className="bg-slate-300 rounded-lg min-h-screen">
      
      <div className="h-[80vh] w-3/4 mx-auto pt-10"><div className="object-cover rounded-lg bg-cover h-full w-full flex items-center justify-center" style={{ backgroundImage: `url(${asset.image})` }}>
        <h1 className="text-white text-3xl font-semibold bg-slate-500 items-center rounded-lg p-4">{estate_title}</h1>
      </div></div>

      <div className="container mx-auto py-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Property Details</h2>
          <p className="mb-4">{description}</p>
          <p className="mb-4">Location: {location}</p>
          <p className="mb-4">Area: {area}</p>
          <p className="mb-4">Price: {price}</p>
          {/* Add Google Map using React Leaflet */}
          <div className="h-80vh]">
          <MapWithMarker latitude={latitude} longitude={longitude} />
          </div>
          <div>
            <Link to="/booking"><button>Mark your Visit</button></Link>
            <Link to="/contact"><button>For More Info Contact Us </button></Link>
          
          

          </div>
          
        </div>
      </div>
      <div>
      
      </div>

    </div></>
  );

  }


export default ViewDetail;



  
       



