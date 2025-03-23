

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/Logo.png';

const OTPInputWeb: React.FC = () => {
    const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
    const navigate = useNavigate();

    const handleChange = (index: number, value: string) => {
        if (!/^\d?$/.test(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < otp.length - 1) {
            document.getElementById(`otp-${index + 1}`)?.focus();
        }
    };

    const handleBackspace = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !otp[index]) {
            const prevInput = document.getElementById(`otp-${index - 1}`);
            if (prevInput) prevInput.focus();
        }
    };

    const handleSubmit = () => {
        if (otp.every(digit => digit !== "")) {
            navigate('/dashboard');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 max-md:bg-white">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-[400px] mx-4 max-md:shadow-none max-md:px-4">
                <div className="flex flex-col">
                    {/* Logo Section */}
                    <div className="flex items-center gap-3 mb-8">
                        <img 
                            src={logo} 
                            className="w-10 h-10 max-md:w-8 max-md:h-8" 
                            alt="Logo"
                        />
                        <h2 className="text-xl font-semibold text-gray-800">
                            Athlete Track
                        </h2>
                    </div>

                    {/* OTP Form */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Enter Code</h2>
                        <p className="text-gray-600 text-lg mb-6">
                            Enter unique code to track measurements in real time
                        </p>

                        {/* OTP Inputs */}
                        <div className="flex gap-4 mb-4 justify-between">
                            {[0, 1, 2, 3].map((index) => (
                                <input
                                    key={index}
                                    id={`otp-${index}`}
                                    type="text"
                                    maxLength={1}
                                    value={otp[index]}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleBackspace(index, e)}
                                    className="w-14 h-13 text-center text-blue-500 font-bold text-2xl 
                                              border-2 border-blue-500 rounded-lg focus:border-blue-500 
                                              focus:outline-none max-md:h-14 max-md:w-14"
                                />
                            ))}
                        </div>

                        {/* Continue Button */}
                        <button
                            onClick={handleSubmit}
                            className=" w-full bg-blue-500 text-white py-3 px-4  rounded-lg 
                                     text-lg font-semibold hover:bg-blue-700 transition-colors
                                     max-md:py-3"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OTPInputWeb;