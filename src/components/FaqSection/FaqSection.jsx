const FaqSection = () => {
    return (
        <div className="faq">
            <h2 className="text-3xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
            <div className="collapse collapse-arrow bg-base-200 mb-3">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                    What are your service areas?
                </div>
                <div className="collapse-content">
                    <p>We offer a wide range of residential properties including apartments, condos, houses, and more. Feel free to browse our listings for more details.
                        However, we also cover neighboring areas. Feel free to contact us for more information.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-3">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    How can I list my property with Skyline Realty?
                </div>
                <div className="collapse-content">
                    <p>Listing your property with Skyline Realty is simple. Just reach out to our team and we will guide you through the process, ensuring your property gets the exposure it deserves.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-3">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Do you provide assistance with mortgage applications?
                </div>
                <div className="collapse-content">
                    <p>Yes, we work closely with trusted mortgage brokers who can assist you with mortgage applications and provide expert advice tailored to your needs.</p>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;