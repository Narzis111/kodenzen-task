import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <section className='bg-white '>
          <div className='container flex items-center min-h-screen px-6 py-12 mx-auto'>
            <div className='flex flex-col items-center max-w-sm mx-auto text-center'>
              <p className='p-3 text-sm font-medium text-primary rounded-full bg-secondary bg-opacity-30 '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  className='w-16 h-16'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'
                  />
                </svg>
              </p>
              <h1 className='mt-3 text-2xl font-bold text-gray-800  md:text-6xl'>
                404
              </h1>
              <h1 className='mt-3 text-2xl font-semibold text-gray-800  md:text-3xl'>
                Something Went Wrong!
              </h1>
              <p className='mt-4 text-gray-500'>Back to Home:</p>
    
              <div className='flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto'>
                
    
                <button className="bg-red-600 px-6 py-2 text-white rounded-full" onClick={() => navigate('/')}> Home</button>
              </div>
            </div>
          </div>
        </section>
      )
};

export default ErrorPage;


