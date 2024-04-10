
// import { BsBookmark } from "react-icons/bs";
// import { BiShareAlt } from "react-icons/bi";
// import { AiFillEye } from "react-icons/ai";
// import { AiFillStar } from "react-icons/ai";

import { Link } from "react-router-dom";

const SingleCard = ({asset}) => {
    const { id, estate_title, segment_name, description, 
        price, status, area, location, facilities, image } = asset;
    return (
        
        <div className="card w-96 bg-base-100 p-4 shadow-xl hover:animate-pulse">
       
       
       
       
       
       
       
        <figure><img className="rounded-lg" src={image} alt={id} /></figure>
        <div className="card-body">
          <h2 className="card-title">{estate_title}</h2>
          <p>{description}</p>
          <p>{location}</p>
          <p>{status}</p>
          <div className="items-center card-actions justify-end flex">
            <p>Price: {price}</p>
            <Link to={`/asset/${id}`}><button className="btn btn-primary">View Property</button></Link></div>
         
        </div>
      </div>
        
    );
};

export default SingleCard;