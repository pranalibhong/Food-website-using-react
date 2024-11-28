//  step 20: social  fontawesome icon  cdn link paste in index.html in public folder using this we fetch facebook, linkdin, twitter icon 
import React from 'react';


const Footer = () => {
    return (
        <footer className=" footer bg-gray-800 py-8   mt-100" id ="footer">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between   gap-8  ">
                    <div className="mb-6 md:mb-0">
                        <h1 className="text-2xl font-bold text-red-500 ">Tomato</h1>
                        <p className="text-white text-sm ">Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br /> Voluptatum tempora consequatur, molestiae exercitationem quasi <br />accusantium ratione distinctio perspiciatis asperiores ipsum.</p>
                        {/* <!-- Social Icons --> */}
                        <div className="flex justify-start mt-4">
                                <i className="fab fa-facebook-f text-2xl text-white hover:text-blue-500 mx-3 border border-white rounded-full p-2 w-10 h-10 flex items-center justify-center"></i>                          
                                <i className="fab fa-twitter text-2xl text-white hover:text-blue-500 mx-3 border border-white rounded-full p-2 w-10 h-10 flex items-center justify-center"></i>                         
                                <i className="fab fa-linkedin-in text-2xl text-white hover:text-blue-500 mx-3 border border-white rounded-full p-2 w-10 h-10 flex items-center justify-center"></i>                           
                        </div>

                    </div>
                    <div className="mb-6 md:mb-0 ">
                        <h2 className="text-2xl text-white font-bold">Company</h2>
                        <ul className="list-none ">
                            <li className="mb-2 "><a href="#" className="text-white hover:text-blue-500">Home</a></li>
                            <li className="mb-2"><a href="#" className="text-white hover:text-blue-500">About Us</a></li>
                            <li className="mb-2"><a href="#" className="text-white hover:text-blue-500">Delivery</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl  text-white font-bold">Get In Touch</h3>
                        <p className="text-white"><a href="tel:+1-212-456-7890">+1-212-456-7890</a></p>
                        <p className="text-white"><a href="mailto:contact@tomato.com">contact@tomato.com</a></p>
                    </div>
                </div>
                <hr className='mt-8'/>
                <div className="text-center mt-6">
                    <p className="text-white">&copy; 2023 Tomato. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;