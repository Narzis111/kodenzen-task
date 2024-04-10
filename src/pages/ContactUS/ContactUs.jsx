import { Helmet } from "react-helmet-async";
const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>Skyline | Contact </title>
      </Helmet>
      <div className="mt-20">

        <h3 className="text-3xl my-7 font-extrabold text-slate-500">
          Our Agents & Offices
        </h3>
        <div className="section lg:flex justify-between">
          <div className="lg:w-1/2 p-2 text-3xl font-bold">People talking with people.
            <br />  <span className="text-orange-500">Everyday, right now.</span> </div>
          <div className="lg:w-1/2 px-6 text-md">In Netherlands, since 2000, Skyline Realty has been
            consolidating its leadership. The strength of the brand, the efficiency of the service and the satisfaction of its employees have been recognized and awarded annually by various entities. In Netherlands, Skyline Realty is also the leader in the number of transactions, agencies and associated agents.</div>

        </div>
        <div className="hero min-h-[400px] rounded-lg mt-20" style={{ backgroundImage: 'url(https://i.ibb.co/PNpwBbs/group-business-workers-smiling.jpg)' }}>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">

              <button className="btn bg-orange-500 mr-6">Find Agent</button>
              <button className="btn bg-blue-950 text-white hover:text-blue-950">Find Office</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;