import { useState, useEffect } from 'react';
import 'animate.css';

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('/testimonial.json')
      .then(res => res.json())
      .then(data => {
        setTestimonials(data);
      })
  }, []);

  return (
    <div className="container mx-auto py-8 my-24">
      <h2 data-aos="fade-down" data-aos-duration="1000" className="text-3xl font-semibold mb-8 text-center">Testimonials</h2>
      <p data-aos="zoom-in-up" data-aos-duration="1500" className='text-md mb-8 mx-auto text-center w-full md:w-1/2'>Whether you are considering buying, selling, or renting, our Testimonials section provides valuable perspectives from individuals who have benefited from our services.</p>
      <div data-aos="fade-up"
        className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id} className={`p-4 mb-4 border rounded-lg shadow-lg bg-white`}
          >
            <div className="flex items-center">
              <div className='w-10 rounded-full mr-3'><img className='w-10 h-10 rounded-full' src={testimonial.image} alt="" /></div>
              <div><p className="text-lg font-bold">{testimonial.name}</p>
            <p className="text-lg font-semibold">{testimonial.profession}</p>
            </div>
            </div>
            <p className="text-gray-600">{testimonial.comment.slice(0,200)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
