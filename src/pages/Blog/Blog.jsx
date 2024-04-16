import blog1 from '../../assets/caro3.jpg'
import blog2 from '../../assets/happy-young-couple-unpacking-their-things-after-moving.jpg'
import blog4 from '../../assets/luxo_1.jpg'
import blog5 from '../../assets/mpintopmachado.jpg'
import blog7 from '../../assets/todd-kent-178j8tJrNlc-unsplash.jpg'
import blog9 from '../../assets/brooke-cagle-WHWYBmtn3_0-unsplash.jpg'
import blog01 from '../../assets/istockphoto-1138451115-640x640.jpg'
import blog10 from '../../assets/1699439324301.jpeg'
import { Helmet } from 'react-helmet'

const Blog = () => {
	return (
		<>
			<Helmet>
				<title>Skyline | Blog</title>
			</Helmet>

			<section className="dark:bg-gray-100 mt-5 dark:text-gray-800">
				<div className="hero min-h-[60vh]" style={{ backgroundImage: 'url(https://i.ibb.co/N2cmzHL/1712746114862.jpg)' }}>

				</div>

				<div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-12 max-w-[1000px] mx-auto">
					<div className="left col-span-8 -mt-16 bg-white">
						<div className="space-y-2 p-4">
							<a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">
								SKYLINE REALTY AGENTS ARE THE GOLD STANDARD IN REAL ESTATE, SKYLINE REALTY HOLDINGS CEO TELLS 2024 R4 CROW</a>

							<img src={blog01} alt="" />

							<p className="text-md dark:text-gray-600 ">
								<a rel="noopener noreferrer" href="#" className="text-xs hover:underline">Leroy Jenkins</a>
								<p>BY SKYLINE TEAM   ||   4  April, 2024 || IN HOUSING RENTAL</p>
							</p><div className="divider"></div>
							<p>“In 51 years, this company has never lost,” Liniger said during the Opening General Session of the 2024 SKYLINE REALTY R4 Convention. When you go up against the competition, you might get knocked down a few times. But with grit, persistence, determination, ambition, you have what you need to get up and fight again. In real estate, that means doing whatever it takes to win the listing or the client and never settling or quitting. It means outperforming the competition consistently.</p>
							<div className="flex justify-center">
								<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600">Read more...</button>
							</div>
						</div>

						<div className="space-y-2 p-4">
							<a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">
								Benefits, requirements and tips for the owners of our house</a>
							<div className="divider"></div>


							<p className="text-md dark:text-gray-600 ">
								<a rel="noopener noreferrer" href="#" className="text-xs hover:underline">Lenardo Jaqulin</a>
								<p>BY SKYLINE TEAM   ||   4  April, 2024 || IN HOUSING RENTAL</p>
							</p><div className="divider"></div>

						</div>

						{/* 2nd */}
						<div className="container max-w-6xl mx-auto space-y-6 sm:space-y-12">
							<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
								<img src={blog1} alt="" className="object-cover w-full h-[60vh] rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
								<div className="mt-5 lg:col-span-5">
									<p>Flexibility: Homeowners have the flexibility to use their property when it is not rented, allowing them to enjoy their home while generating income when not using it.
										Personalized Experience: Travelers seek authentic and unique experiences, and vacation rentals give them the opportunity to stay in local homes, which can enrich their travel experience.
									</p>
									<div className="flex justify-center">
										<button type="button" className="px-6 py-3 text-black text-md rounded-md hover:underline dark:bg-gray-50">Read more...</button>
									</div>

								</div>
							</a>
							<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">


								<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
									<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={blog9} />
									<div className="space-y-2 h-80">
										<h3 className="mt-3 text-xl font-semibold group-hover:underline group-focus:underline">WHY ARE MORE SOLO WOMEN BUYING HOMES?</h3>
										<span className="text-xs dark:text-gray-600">January 24, 2021</span>
										<p>Single female homebuyers accounted for 9% more market share than single male homebuyers in 2023, according to Association of REALTORS®. SKYLINE REALTY agents share insights on the rising trend.</p>
										<div className="flex justify-center">
											<button type="button" className="px-6 py-3 text-black text-md rounded-md hover:underline dark:bg-gray-50">Read more...</button>
										</div>
									</div>
								</a>
								<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
									<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={blog7} />
									<div className="space-y-2 h-80">
										<h3 className="mt-3 text-xl font-semibold group-hover:underline group-focus:underline">HOMES ARE SELLING FASTER IN THESE CITIES</h3>
										<span className="text-xs dark:text-gray-600">January 25, 2021</span>
										<p>In February, homes for sale were spending an average of 44 days on the market – but in a few bustling metro areas, they were selling much quicker, according to the SKYLINE National Housing Report.</p>
										<div className="flex justify-center">
											<button type="button" className="px-6 py-3 text-black text-md rounded-md hover:underline dark:bg-gray-50">Read more ...</button>
										</div>
									</div>
								</a>
								<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
									<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={blog10} />
									<div className="space-y-2 h-80">
										<h3 className="text-xl mt-3 font-semibold group-hover:underline group-focus:underline">SKYLINE HOLDS COURSES FOR PROMOTERS IN ROTTERDAM</h3>
										<span className="text-xs dark:text-gray-600">January 26, 2021</span>
										<p>Exclusive face-to-face courses for promoters will take place on the 23rd and 25th of July, at the SANA Malhoa hotel and HF Ipanema in Rotterdam.</p>
										<div className="flex justify-center">
											<button type="button" className="px-6 py-3 text-black text-md rounded-md hover:underline dark:bg-gray-50">Read more...</button>
										</div>
									</div>
								</a>
							</div>
							<div className="flex justify-center">
								<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600">Load more posts...</button>
							</div>
						</div>
					</div>

					<div className="right col-span-4 p-4">
						<h1 className="md:text-xl h-[30px] text-xs text-blue-950 font-extrabold mt-5">S<span className="text-yellow-600">K</span>YLINE R<span className="text-yellow-600">E</span>ALTY Blog</h1>
						<div className="divider"></div>
						<label className="input input-bordered rounded-none flex items-center gap-2">
							<input type="text" className="grow" placeholder="Search form" />
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6 opacity-70 text-black"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>

						</label>
						<div className="divider">Advertising</div>
						<div className="hero min-h-[100vh]" style={{ backgroundImage: 'url(https://i.ibb.co/gdYQfpW/1711991442931.jpg)' }}>
							<div className="hero-overlay bg-opacity-30"></div>
							<div className="hero-content text-center text-white ">
								<div className="max-w-md">
									<h1 className="mb-5 text-3xl font-bold">Get an Amazing House to live</h1>
									<p className="mb-5">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
								</div>
								<div>
								</div>
							</div>
						</div>
						<div>


							<div>
								<div className='my-10'>
									<h2 className="text-xl font-bold">CATEGORIES:</h2>
									<ul className="list-disc ml-6">

										<li className='hover:text-blue-600 hover:underline'> <a href="">Owners</a> </li>
										<li className='hover:text-blue-600 hover:underline'> <a href="">Vacation rental</a> </li>
										<li className='hover:text-blue-600 hover:underline'> <a href="">Communication</a> </li>
										<li className='hover:text-blue-600 hover:underline'> <a href="">Curiosities</a> </li>
										<li className='hover:text-blue-600 hover:underline'> <a href="">Our things</a> </li>
									</ul>
								</div>





							</div>
							<div className="grid justify-center grid-cols-1 mt-6 gap-4">

								<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
									<img role="presentation" className="object-cover w-full rounded h-28 dark:bg-gray-500" src={blog2} />
									<div className="">
										<h3 className="text-xl font-semibold">Young people will be exempt from IMT and 100% housing credit
										</h3>
									</div>
								</a>

								<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
									<img role="presentation" className="object-cover w-full rounded h-28 dark:bg-gray-500" src={blog4} />
									<div className="">
										<h3 className="text-xl font-semibold">Where did foreigners buy the most houses in Netherlands?</h3>
									</div>
								</a>
								<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
									<img role="presentation" className="object-cover w-full rounded h-28 dark:bg-gray-500" src={blog5} />
									<div className="">
										<h3 className="text-xl font-semibold">Future of housing: what the AD Government program says
										</h3>
									</div>
								</a>
							</div>

						</div>
					</div>
				</div>


				<section className="bg-gray-100 py-12">
					<div className="max-w-4xl mx-auto px-4">
						<h2 className="text-3xl font-bold text-center mb-6">Subscribe to Our Newsletter</h2>
						<p className="text-center text-gray-700 mb-8">Stay up to date with the latest news and listings from Skyline Realty. Subscribe to our newsletter now!</p>
						<form className="flex items-center max-w-md mx-auto">
							<input type="email" placeholder="Enter your email address" className="flex-1 rounded-l-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300" />
							<button type="submit" className="bg-blue-500 text-white rounded-r-md px-6 py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Subscribe</button>
						</form>
					</div>
				</section>


			</section>
		</>
	);
};

export default Blog;
