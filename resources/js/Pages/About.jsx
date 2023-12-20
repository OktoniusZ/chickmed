import Navbar from "@/Components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Footer from "@/Components/Footer";
import gmail from '../../images/gmail.png'
import discord from '../../images/discord2.png'
import linkedin from '../../images/linkedin2.png'
import ImageSlider from "@/Components/ImageSlider";

export default function About() {
   
    return (
        <>
            <Navbar />
            {/* Start Landing Page */}
            <div className="text-center py-48">
                <h1 className="font-medium text-6xl mx-96 mb-8">
                    We've got an{" "}
                    <span className="font-bold text-orange-600">entire</span>{" "}
                    team dedicated to supporting you and your business
                </h1>
                <p className="mb-8">
                    Mari berkenalan dengan masing-masing anggota dari Chickmed
                </p>
                <div className="flex justify-center gap-8">
                    <button className="btn bg-transparent text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white w-36">
                        Contact Us
                    </button>
                    <button className="btn bg-orange-600 text-white hover:bg-orange-400 w-36">
                        See More
                    </button>
                </div>
            </div>
            {/* End Landing Page */}
            

            {/* Image Slider Component */}
            <ImageSlider></ImageSlider>


            {/* Start Contact Page */}
            <div className="px-48 flex justify-between items-center">
                <div className="">
                    <h1 className="font-bold text-5xl mb-8"><span className="text-orange-600">Contact</span>Us</h1>
                    <p className="font-bold">Call Us</p>
                    <p className="text-gray-600">Call our team Monday - Friday from 8am to 5m.</p>
                    <div className="flex mb-8">
                        <p>
                            <FontAwesomeIcon
                                icon={faPhone}
                                className="text-orange-600 mr-3"
                            />
                        </p>
                        <p>+62 812 1234 1234</p>
                    </div>
                    <h1 className="font-bold">Chat with us</h1>
                    <p className="text-gray-600">Speak to aour friendly team</p>
                    <div className="flex gap-4 mt-3">
                        <img src={gmail} alt="gmail" />
                        <img src={discord} alt="discord" />
                        <img src={linkedin} alt="linkedin" />
                    </div>
                </div>
                <div>
                    <img className="object-cover h-96" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Contact" />
                </div>
            </div>
            {/* End Contact Page */}
            
            {/* Footer Component */}
            <Footer></Footer>
        </>
    );
}
