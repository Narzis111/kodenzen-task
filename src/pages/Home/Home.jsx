
import Carousal from "../../components/Carousal/Carousal";
import SingleCard from "../../components/SingleCard/SingleCard";
import Slider from "../../components/Slider/Slider";
import { useLoaderData } from "react-router-dom";
import 'animate.css';
import { Helmet } from "react-helmet-async";
import TestimonialSection from "../../components/TestimonialSection/TestimonialSection";
import FAQ from "../../components/FAQ/FAQ";





const Home = () => {
  
    const assets = useLoaderData();


    return (
        <div>
             <Helmet>
                <title>Skyline | Home</title>
             </Helmet>
            <Slider></Slider>

            <Carousal></Carousal>
            <div>
                <h2 className="text-center text-3xl font-bold mt-24 hover:animate-ping">Estates: {assets.length} </h2>
                <p className="lg:max-w-[750px] text-center mx-auto py-6">Skyline Realty is dedicated to providing exceptional estates that redefine luxury living. Our portfolio boasts a diverse range of meticulously curated properties, each crafted with the highest standards of design, quality, and innovation. </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

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
            {/* testimonial */}
            

            <TestimonialSection></TestimonialSection>
            <FAQ></FAQ>
  

        </div>
    );
};

export default Home;