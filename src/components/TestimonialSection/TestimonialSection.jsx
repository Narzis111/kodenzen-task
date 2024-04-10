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
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold mb-8 text-center">Testimonials</h2>
      <p className='text-md mb-8 mx-auto text-center w-1/2'>Whether you are considering buying, selling, or renting, our Testimonials section provides valuable perspectives from individuals who have benefited from our services.</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`p-4 mb-4 border rounded-lg shadow-lg bg-white`}
          >
            <p className="text-lg font-semibold">{testimonial.name}</p>
            <p className="text-lg animate-bounce font-semibold">{testimonial.profession}</p>
            <p className="text-gray-600">{testimonial.comment.slice(0,200)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
