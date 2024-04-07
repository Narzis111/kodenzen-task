
import Carousal from "../../components/Carousal/Carousal";
// import SingleCard from "../../components/SingleCard/SingleCard";
import Slider from "../../components/Slider/Slider";
import {useLoaderData} from "react-router-dom";


const Home = () => {

    const assets = useLoaderData();


    return (
        <div>
            <Slider></Slider>
            <Carousal></Carousal>
            <div className="grid grid-cols-1 md:grid-cols-3 border my-36 gap-4">
                
                {/* Estates container */}
               
                    <h2 className="mx-auto text-3xl font-bold py-3">Estates: {assets.length} </h2>
                    {/* {
                        news.length
                        news.map(aNews => <SingleCard
                            key={aNews._id}
                            news={aNews}> </SingleCard>)
                    } */}
                </div>
                
     



            
        </div>
    );
};

export default Home;