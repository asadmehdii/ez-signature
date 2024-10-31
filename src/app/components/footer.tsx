import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#2191D0] text-white py-8 font-[Mada]">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-6">
                {/* General Section */}
                <div>
                    <h3 className="font-semibold mb-2 font-[Mada]" style={{ marginBottom: '15px' }}>General</h3>
                    <ul>
                        <li style={{ marginBottom: '10px' }}>
                            <a href="#" style={{ fontWeight: 500, font: 'Mada', fontSize: '18px', lineHeight: '23.4px' }}>
                                Home
                            </a>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <a href="#" style={{ fontWeight: 500, font: 'Mada', fontSize: '18px', lineHeight: '23.4px' }}>
                                Features
                            </a>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <a href="#" style={{ fontWeight: 500, font: 'Mada', fontSize: '18px', lineHeight: '23.4px' }}>
                                Pricing Plans
                            </a>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <a href="#" style={{ fontWeight: 500, font: 'Mada', fontSize: '18px', lineHeight: '23.4px' }}>
                                Blog
                            </a>
                        </li>
                    </ul>
                </div>


                {/* Main Features Section */}
                <div>
                    <h3 className="font-semibold mb-2 font-[Mada]" style={{ marginBottom: '15px' }}>Main Features</h3>
                    <ul>
                        <li style={{ marginBottom: '10px' }}>
                            <a href="#" style={{ fontWeight: 500, font: 'Mada', fontSize: '18px', lineHeight: '23.4px' }}>Electronic Signatures</a>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <a href="#" style={{ fontWeight: 500, font: 'Mada', fontSize: '18px', lineHeight: '23.4px' }}>Documents & Security</a>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <a href="#" style={{ fontWeight: 500, font: 'Mada', fontSize: '18px', lineHeight: '23.4px' }}>In-Person Signing</a>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <a href="#" style={{ fontWeight: 500, font: 'Mada', fontSize: '18px', lineHeight: '23.4px' }}>Audit Trail</a>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <a href="#" style={{ fontWeight: 500, font: 'Mada', fontSize: '18px', lineHeight: '23.4px' }}>Templates</a>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <a href="#" style={{ fontWeight: 500, font: 'Mada', fontSize: '18px', lineHeight: '23.4px' }}>App Integrations</a>
                        </li>
                    </ul>
                </div>


                {/* Developer Section */}
                <div>
                    <h3 className="font-semibold mb-2" style={{ marginBottom: '15px' }}>Developer</h3>
                    <ul>
                        <li style={{ marginBottom: '10px' }}>
                            <a href="#" style={{ fontWeight: 500, font: 'Mada', fontSize: '18px', lineHeight: '23.4px' }}>Developer Portal</a>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <a href="#" style={{ fontWeight: 500, font: 'Mada', fontSize: '18px', lineHeight: '23.4px' }}>Create Free Sandbox</a>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <a href="#" style={{ fontWeight: 500, font: 'Mada', fontSize: '18px', lineHeight: '23.4px' }}>API Pricing</a>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <a href="#" style={{ fontWeight: 500, font: 'Mada', fontSize: '18px', lineHeight: '23.4px' }}>API Documentation</a>
                        </li>
                    </ul>
                </div>

                {/* Press & Legal Section */}
                <div>
                    <h3 className="font-semibold mb-2" style={{ marginBottom: '15px' }}>Press & Legal</h3>
                    <ul>
                        <li style={{ marginBottom: '10px' }}>
                            <a href="#" style={{ fontWeight: 500, font: 'Mada', fontSize: '18px', lineHeight: '23.4px' }}>Contact Us</a>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <a href="#" style={{ fontWeight: 500, font: 'Mada', fontSize: '18px', lineHeight: '23.4px' }}>Terms & Conditions</a>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <a href="#" style={{ fontWeight: 500, font: 'Mada', fontSize: '18px', lineHeight: '23.4px' }}>Privacy Policy</a>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <a href="#" style={{ fontWeight: 500, font: 'Mada', fontSize: '18px', lineHeight: '23.4px' }}>Cookie Policy</a>
                        </li>
                    </ul>
                </div>

                {/* Subscribe Section */}
                <div>
                    <h3 className="font-semibold mb-2">Subscribe</h3>
                    <p className="mb-4">Subscribe now to the ESignature and get the News & Letters.</p>
                    <div className="flex items-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-2 rounded-l text-black w-full md:w-auto"
                        />
                        <button className="p-2 bg-white text-[#2191D0] rounded-r">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                width="24" height="24"
                            >
                                <path d="M12 2L3.5 9.5 12 17 20.5 9.5 12 2zM12 19l-8.5-8.5L12 21 20.5 10.5 12 19z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>


            {/* Bottom Border and Copyright */}
            <div className="border-t border-white mt-8 pt-4">
                <p className="text-left px-20">Copyright © 2024 ESignature</p>
            </div>
        </footer>
    );
};

export default Footer;
