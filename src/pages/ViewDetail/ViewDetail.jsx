
import { useLoaderData, useParams } from "react-router-dom";

const ViewDetail = () => {
  const assets = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const asset = assets.find(asset => asset.id === idInt);
    console.log(assets, id); 
    return (
        <div>
      
        <h2 className="text-center text-3xl font-bold py-3">Home: </h2>
        <div className="border">


                <h2>{id}</h2>
                <h2>{asset.description}</h2>
                <h2>{asset.title}</h2>
               

                {/* <div className="flex justify-between w-2/3">
						<div className="items-center text-md font-bold flex-1">Tags
							{tags.map(tag => (
								<a key={tag} rel="noopener noreferrer" href="#" className="text-sm px-3 text-green-600 rounded-full hover:underline bg-gray-100 dark:bg-violet-600 font-bold dark:text-gray-50">#{tag}</a>
							))}
						</div>
						</div> */}
             
                
      
            
          </div>
       
        {/* {newsSingle.length === 0 && <p>No books found.</p>} */}
      </div>
                
 
    );
};

export default ViewDetail;



  
       



