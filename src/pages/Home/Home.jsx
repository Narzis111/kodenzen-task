import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import img11 from "../../assets/Real-Estate-Home-For-Sale-Web-Banner-Design-scaled.jpg"
import img12 from "../../assets/real-estate-1.png"
import img13 from "../../assets/dream.png"

const Home = () => {
    return (
        <div>
            <label className="input my-4 flex items-center gap-2">
                <span className="badge badge-info bg-yellow-600 font-bold px-6 py-4 rounded">Latest</span>
                <Marquee pauseOnHover={true} speed={50}>
                    <Link className="mr-12 text-blue-950" to="/">
                        Skyline Realty Celebrates Record Sales Year, Surpassing Expectations
                        Skyline Realty, a leading real estate firm, announced today a landmark achievement with record-breaking sales figures for the fiscal year. Bolstered by strategic marketing initiatives and a robust housing market, the company surpassed all projections, cementing its position as a market leader in the industry. The CEO attributed the success to the dedication of their talented team and the trust placed in them by their clients.</Link>
                </Marquee>
            </label>



            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-[400px]">
                    <img src={img11} className="w-full rounded-lg object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img12} className="w-full rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img13} className="w-full rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;