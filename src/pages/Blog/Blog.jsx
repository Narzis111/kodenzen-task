const Blog = () => {
    return (
        <div className="container mx-auto py-12">
            <h1 className="text-3xl font-semibold text-center mb-8">Skyline Realty Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Blog post 1 */}
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <img src="blog-post-image1.jpg" alt="Blog Post" className="w-full h-48 object-cover object-center" />
                    <div className="p-6">
                        <h2 className="text-xl font-semibold mb-4">Title of Blog Post 1</h2>
                        <p className="text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum urna et elit convallis, sed commodo risus malesuada.
                        </p>
                        <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">Read More</a>
                    </div>
                </div>
                {/* Blog post 2 */}
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <img src="blog-post-image2.jpg" alt="Blog Post" className="w-full h-48 object-cover object-center" />
                    <div className="p-6">
                        <h2 className="text-xl font-semibold mb-4">Title of Blog Post 2</h2>
                        <p className="text-gray-700">
                            Duis euismod velit et consequat dictum. Curabitur fringilla mi nec augue dignissim ultricies. 
                        </p>
                        <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">Read More</a>
                    </div>
                </div>
                {/* Blog post 3 */}
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <img src="blog-post-image3.jpg" alt="Blog Post" className="w-full h-48 object-cover object-center" />
                    <div className="p-6">
                        <h2 className="text-xl font-semibold mb-4">Title of Blog Post 3</h2>
                        <p className="text-gray-700">
                            Nulla facilisi. Integer sit amet lacinia purus. Vivamus venenatis mi eget ipsum vehicula, sed varius sapien consectetur. 
                        </p>
                        <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
