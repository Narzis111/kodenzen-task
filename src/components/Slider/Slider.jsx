import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Slider = () => {
    return (
        <label data-aos="flip-down"
        data-aos-duration="1000" className="input my-10 flex items-center gap-2">
                <span className="badge badge-info bg-orange-500 font-bold px-6 py-4 rounded">Latest</span>
                <Marquee pauseOnHover={true} speed={50}>
                    <Link className="mr-12 text-blue-950" to="/">
                        Skyline Realty Celebrates Record Sales Year, Surpassing Expectations
                        Skyline Realty, a leading real estate firm, announced today a landmark achievement with record-breaking sales figures for the fiscal year. Bolstered by strategic marketing initiatives and a robust housing market, the company surpassed all projections, cementing its position as a market leader in the industry. The CEO attributed the success to the dedication of their talented team and the trust placed in them by their clients.</Link>
                </Marquee>
            </label>
    );
};

export default Slider;