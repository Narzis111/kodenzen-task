
import Carousal from "../../components/Carousal/Carousal";

import SingleCard from "../../components/SingleCard/SingleCard";

import Slider from "../../components/Slider/Slider";
import { useLoaderData } from "react-router-dom";

import 'animate.css';
import { Marker, Popup, TileLayer } from "leaflet";


const Home = () => {
    const position = [51.505, -0.09];
    const assets = useLoaderData();


    return (
        <div>
            <Slider></Slider>

            <Carousal></Carousal>
            <div>
                <h2 className="text-center text-3xl font-bold my-36 hover:animate-ping">Estates: {assets.length} </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    {/* Estates container */}

                    {
                        assets.map(asset => <SingleCard
                            key={asset.id}
                            asset={asset}></SingleCard>)
                    }
                </div>
                <div>


                </div>
            </div>







        </div>
    );
};

export default Home;