import img11 from "../../assets/caro1.jpg";
import img12 from "../../assets/blof3.jpg";
import img13 from "../../assets/caro.jpg";
import calendar from "/calendar-svgrepo-com.svg";
const Carousal = () => {
    return (
       
            <div className="carousel w-full mt-5">
            <div id="slide1" className="carousel-item relative w-full h-[400px]">
                <img src={img11} className="w-full rounded-lg object-cover" />
                <div className="absolute flex justify-center bottom-0 left-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full h-[400px]">
                <img src={img12} className="w-full object-cover rounded-lg" />
                <div className="absolute flex justify-center bottom-0 left-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
         
             <div id="slide3" className="carousel-item relative w-full h-[400px]">
            <img src={img13} className="w-full object-cover rounded-lg" />
            <div className="absolute flex justify-center bottom-0 left-1/2">
                     <a href="#slide2" className="btn btn-circle">❮</a>
                   <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
     
            <div className="absolute lg:max-w-[1180px] bg-black max-w-[250px] p-6 lg:top-40 md:top-40 top-6 left-20 md:max-w-[750px] md:mx-auto lg:left-0 lg:right-0 md:left-8 md:right-8 transform translate-y-full opacity-70 px-2 md:py-10">
                <h1 className="text-white text-xl mb-3 md:text-3xl text-center font-semibold">Better Living</h1>
                <div className="flex justify-center gap-3 flex-col md:flex-row items-center text-center">
                    
                    <div>
                        <label className="input hidden px-5 md:hidden input-bordered rounded-none lg:flex items-center gap-2">
                            <img className="w-4 h-4 text-gray-200" src={calendar} alt="" />
                            <input type="text" className="grow" placeholder="Mark visit with agent" />
                        </label>
                    </div>
                    <div>
                        <label className="input input-bordered rounded-none flex items-center gap-2">
                            <img className="w-4 h-4 text-gray-200" src={calendar} alt="" />
                            <input type="text" className="grow" placeholder="Select your date" />
                        </label>
                    </div>
                    <div>
                        <label className="input input-bordered rounded-none flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6 opacity-70 text-black"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            <input type="text" className="grow" placeholder="Find your suitable place" />
                        </label>
                    </div>
                    <div>
                  
                        <div className="indicator">
                            <button className="btn join-item rounded-none bg-orange-600 text-white border-none">Reservation</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
   

    );
};

export default Carousal;