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

<h3 className='text-2xl font-bold my-10 text-center'>Update User Profile</h3>

    <form onSubmit={handleSubmit} className="bg-blue-950 mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2">
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
      <div className="flex items-center justify-between">
        <button
          className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Mark your Visit
        </button>
      </div>
    </form>
    </div>
  );
};

export default BookingForm;
