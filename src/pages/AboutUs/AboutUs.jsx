import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { GiTargetShot, GiAirBalloon } from "react-icons/gi";
import { GoHeart } from "react-icons/go";


const AboutUs = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <Helmet>
        <title>Skyline | About</title>
      </Helmet>
      <div className='mt-10 p-10 rounded-xl min-h-screen'>

        <div className="hero max-h-[550px] rounded-xl" style={{ backgroundImage: 'url(https://i.ibb.co/Wghbp3S/publica-tu-alojamiento-foto.jpg)' }}>

          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-center text-2xl font-bold">Why choose Skyline Realty?</h1>

              <div className='max-w-[1100px] mx-auto '>
                <div className='flex justify-around gap-4 text-center items-center max-w-3/4 mx-auto'>

                  <div><GiTargetShot className='text-6xl'></GiTargetShot></div>


                  <div>
                    <GoHeart className='text-6xl'></GoHeart>


                  </div>
                  <div>
                    <GiAirBalloon className='text-6xl'></GiAirBalloon></div>

                </div>
                <div className='flex justify-around gap-4 text-center items-center max-w-3/4 mx-auto'>
                  <div className='text-center'>
                    EFFECTIVENESS
                  </div>
                  <div>

                    CARE & ATTENTION

                  </div>
                  <div>
                    FREEDOM</div>

                </div>
              </div>

              <button className="toggle-details bg-orange-500 hover:bg-blue-950 py-4 px-6 mt-6 rounded-full text-white" onClick={toggleDetails}>
                {showDetails ? 'Show Less' : 'Show More'}
              </button>

            </div>
          </div>
        </div>




        <div className="collapse collapse-arrow bg-base-200 mt-10">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Client-Centric Approach:
          </div>
          <div className="collapse-content">
            <p>Our commitment to putting clients first. Emphasize that the needs of client and goals are at the forefront of every decision and action taken by the team. Whether it is understanding their unique requirements, providing personalized advice, or going the extra mile to exceed expectations, assure clients that their satisfaction and success are the top priorities. By adopting a client-centric approach, Skyline Realty aims to build long-lasting relationships based on trust, integrity, and superior service, ensuring that clients feel valued and supported throughout their real estate journey.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Expert Guidance and Support:
          </div>
          <div className="collapse-content">
            <p>Highlight the expertise and professionalism of your agents and staff. Emphasize that Skyline Realty is staffed with experienced and knowledgeable professionals who are dedicated to providing exceptional service to clients. Whether it is navigating the complexities of the market, negotiating the best deals, or handling the paperwork, assure clients that they will receive expert guidance and support at every step of their real estate journey. By entrusting their real estate transactions to Skyline Realty, clients can have confidence that they are in capable hands.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Comprehensive Real Estate Solutions:
          </div>
          <div className="collapse-content">
            <p>Emphasize that Skyline Realty offers a comprehensive range of real estate services to meet the diverse needs of clients. Whether it is buying, selling, renting, or investing in residential properties, commercial properties, or land, highlight that your team is equipped to handle all aspects of the transaction process. By providing a one-stop solution, clients can rely on Skyline Realty for their various real estate needs, simplifying their experience and ensuring they receive consistent, high-quality service.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
