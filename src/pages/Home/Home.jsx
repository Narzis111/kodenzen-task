
import Carousal from "../../components/Carousal/Carousal";
import SingleCard from "../../components/SingleCard/SingleCard";
import { useLoaderData } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import 'animate.css';
import { Helmet } from "react-helmet-async";
import TestimonialSection from "../../components/TestimonialSection/TestimonialSection";
import FaqSection from "../../components/FaqSection/FaqSection";


const Home = () => {

    const assets = useLoaderData();


    return (
        <div className="font-Roboto">
            <Helmet>
                <title>Skyline | Home</title>
            </Helmet>
           <Slider></Slider>
            <Carousal></Carousal>
            <div>
                <h2 className="text-center lg:text-3xl text-xl font-bold hover:animate-heartBeat-2s transition-transform mt-24">Estates Corner</h2>
                <p data-aos="zoom-in" data-aos-duration="1000" className="max-w-[750px] hover:animate-flash-2s text-center mx-auto py-6">Skyline Realty is dedicated to providing exceptional estates that redefine luxury living. Our portfolio boasts a diverse range of meticulously curated properties, each crafted with the highest standards of design, quality, and innovation. </p>
                <div data-aos="fade-down"
                    data-aos-duration="1000" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">


                    {
                        assets.map(asset => <SingleCard
                            key={asset.id}
                            asset={asset}></SingleCard>)
                    }
                </div>

            </div>


            <TestimonialSection></TestimonialSection>
            <FaqSection></FaqSection>


        </div>
    );
};

export default Home;