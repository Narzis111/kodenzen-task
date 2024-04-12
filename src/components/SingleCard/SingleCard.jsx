import { BiHomeAlt2 } from "react-icons/bi";
import { PiBathtubThin, PiBedLight } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const SingleCard = ({ asset }) => {
  const { id, estate_title, description,
    price, status, area, location, facilities, image } = asset;


  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl transition border-2 hover:scale-105 border-primary
        hover:border-secondary border-opacity-30">
        <figure><img src={image} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title hover:underline text-md font-bold">
            {estate_title}
            <div className="badge bg-blue-600 text-white p-3">{status}</div>
          </h2>
          <p>{description.split(" ").slice(0, 10).join(" ")}</p>
          <div className="card-actions justify-between">
            <div className="badge border-none"><span><IoLocationOutline></IoLocationOutline></span>{location.split(" ").slice(0, 1).join(" ")}</div>
            <div className="badge border-none"><span><BiHomeAlt2></BiHomeAlt2></span>{area}</div>
            <div>
              {facilities.slice(0, 1).map((facility, index) => (
                <div key={index} className="badge border-none">
                  <PiBedLight></PiBedLight> {facility.split(' ')[0]}
                </div>
              ))}
            </div>
            <div>
              {facilities.slice(1, 2).map((facility, index) => (
                <div key={index} className="badge border-none">
                  <PiBathtubThin></PiBathtubThin> {facility.split(' ')[0]}
                </div>
              ))}
            </div>
          </div>



          <div className="items-center card-actions flex">
            <p>Price: {price}</p>
            <Link to={`/asset/${id}`}><button className="btn bg-blue-200 hover:bg-blue-500 py-1 rounded-full hover:scale-105">View Property</button></Link></div>

        </div>

      </div>

    </>


  );
};

export default SingleCard;
SingleCard.propTypes = {
  asset: PropTypes.object,
}