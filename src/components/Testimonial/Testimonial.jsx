import { fadeIn } from 'animate.css';

const Testimonial = ({name, comment}) => {
  return (
    <>
    <div className={`p-4 mb-4 rounded-lg shadow-lg bg-white ${fadeIn}`}>
    <p className="text-lg font-semibold">{name}</p>
    <p className="text-gray-600">{comment}</p>
  </div>
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold mb-8">Testimonials</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Testimonial name="John Doe" comment="Skyline Realty helped me find the perfect home for my family. Their attention to detail and personalized service made the entire process stress-free." />
        <Testimonial name="Jane Smith" comment="I couldn't be happier with my experience working with Skyline Realty. They listened to my needs and found me a home that exceeded my expectations." />
        <Testimonial name="Michael Johnson" comment="From start to finish, Skyline Realty provided exceptional service. Their professionalism and expertise were unmatched, and I would highly recommend them to anyone looking to buy or sell a home." />
      </div>
    </div></>
  );
};

export default Testimonial;