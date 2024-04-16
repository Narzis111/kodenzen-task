import { useState } from 'react';
import { Helmet } from 'react-helmet-async';


const BookingForm = () => {

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
 
  };

  return (
    <div>
       <Helmet>
    <title>Skyline | Booking</title>
 </Helmet>
 <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/ZXvvBS0/360-F-97870953-V0-Aq7dh-Jp2re-T1-Gs-GXy0v-I2fdaz-TC9-IX.jpg)'}}>
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content">
  
<div className='w-full bg-transparent'>
<h3 className='text-2xl font-bold my-10 text-center text-white'>Mark Your Visit With Our Agent</h3>

<form onSubmit={handleSubmit} className="bg-blue-transparent mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full">
  <div className="mb-4">
    <label className="block text-white text-sm font-bold mb-2">
      Date
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="date"
      type="date"
      value={date}
      onChange={handleDateChange}
    />
  </div>
  <div className="mb-4">
    <label className="block text-white text-sm font-bold mb-2">
      Time
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="time"
      type="time"
      value={time}
      onChange={handleTimeChange}
    />
  </div>
  <div className="mb-4">
    <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
      Email
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="email"
      type="email"
      value={email}
      onChange={handleEmailChange}
    />
  </div>
  <div className="mb-6">
    <label className="block text-white text-sm font-bold mb-2" htmlFor="phone">
      Phone
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="phone"
      type="tel"
      value={phone}
      onChange={handlePhoneChange}
    />
  </div>
  <div className="items-center flex justify-center">
    <button
      className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
    >
      Mark your Visit
    </button>
  </div>
</form>

</div>

    </div>
    </div>
    </div>
  );
};

export default BookingForm;
