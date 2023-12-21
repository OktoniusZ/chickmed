import logo from "../../images/logo.png";
import instagram from "../../images/instagram.png";
import linkedin from "../../images/linkedin.png";
import whatsapp from "../../images/whatsapp.png";
import discord from "../../images/discord.png";

export default function Footer() {
    return (
        <>
            {/* Start Footer Page */}
            <div className="max-w-screen-2xl mx-auto flex justify-between py-24 p-6 flex-col md:flex-row gap-10 flex-wrap">
                <div>
                    <img src={logo} alt="Logo" />
                    <p className="text-gray-600">
                        © Bangkit Academy Cohort 2023 - Team
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-10">
                    <div className="mr-24">
                        <h3 className="font-bold mb-4 text-xl">Navigasi</h3>
                        <ul>
                            <li className="mb-4">
                                <a href="#">Home</a>
                            </li>
                            <li className="mb-4">
                                <a href="#">Tentang Kami</a>
                            </li>
                            <li className="mb-4">
                                <a href="#">Service</a>
                            </li>
                            <li className="">
                                <a href="#">Kontak Kami</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-bold text-2xl mb-4">
                            Social Media
                        </h1>
                        <div className="flex gap-3">
                            <img src={instagram} alt="" />
                            <img src={whatsapp} alt="" />
                            <img src={linkedin} alt="" />
                            <img src={discord} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* End Footer Page */}
        </>
    );
}
