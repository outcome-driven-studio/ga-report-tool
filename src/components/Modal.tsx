import React, { useState } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const isValidEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-[#00000040] bg-opacity-50 flex items-center justify-center z-50">
            <div className="w-[458px] h-[464px] relative bg-white rounded-lg shadow-[0px_5px_10px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-gray-100 overflow-hidden">
                <div className="w-16 h-16 left-[195.50px] top-[88.50px] absolute bg-white rounded-full shadow-[0px_2px_4px_-2px_rgba(16,24,40,0.06)] shadow-[0px_4px_8px_-2px_rgba(16,24,40,0.10)] border border-zinc-100" />
                <div className="w-8 h-8 left-[212px] top-[106px] absolute overflow-hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                        <path d="M30.457 25.5013L21.0463 17.0013M12.9511 17.0013L3.54041 25.5013M2.83203 9.91797L14.399 18.0148C15.3357 18.6705 15.804 18.9983 16.3134 19.1253C16.7634 19.2375 17.234 19.2375 17.684 19.1253C18.1934 18.9983 18.6617 18.6705 19.5984 18.0148L31.1654 9.91797M9.63203 28.3346H24.3654C26.7456 28.3346 27.9357 28.3346 28.8448 27.8714C29.6445 27.464 30.2947 26.8138 30.7021 26.0141C31.1654 25.105 31.1654 23.9149 31.1654 21.5346V12.468C31.1654 10.0877 31.1654 8.89763 30.7021 7.98851C30.2947 7.18882 29.6445 6.53865 28.8448 6.13119C27.9357 5.66797 26.7456 5.66797 24.3654 5.66797H9.63203C7.25181 5.66797 6.0617 5.66797 5.15257 6.13119C4.35288 6.53865 3.70272 7.18882 3.29525 7.98851C2.83203 8.89763 2.83203 10.0877 2.83203 12.468V21.5346C2.83203 23.9149 2.83203 25.105 3.29525 26.0141C3.70272 26.8138 4.35288 27.464 5.15257 27.8714C6.0617 28.3346 7.25181 28.3346 9.63203 28.3346Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className="w-28 h-28 left-[174.50px] top-[67.50px] absolute rounded-full border border-zinc-100" />
                <div className="w-36 h-36 left-[157.50px] top-[50.50px] absolute rounded-full border border-neutral-100" />
                <div className="w-44 h-44 left-[138.50px] top-[32.50px] absolute rounded-full border border-neutral-50" />
                <div className="left-[26px] top-[238px] absolute inline-flex flex-col justify-start items-center gap-2">
                    <div className="flex flex-col justify-start items-start gap-1.5">
                        <div className="justify-start text-black text-sm font-medium leading-tight">Email Address</div>
                        <div className="w-96 px-3.5 py-2.5 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-400 inline-flex justify-start items-center gap-2">
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                className={`flex-1 text-base font-normal leading-norma active:outline-none focus:outline-none ${isValidEmail(email) ? 'text-black' : 'text-gray-500'} no-select`}
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-96 left-[26px] top-[324px] absolute inline-flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch h-11 px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] outline outline-1 outline-offset-[-1px] outline-[#55B271] inline-flex justify-center items-center gap-2 overflow-hidden">
                        <div className="px-0.5 inline-flex flex-col justify-start items-start">
                            <div className="justify-start text-[#55B271] text-base font-bold leading-normal">Send PDF</div>
                        </div>
                        <div className="w-6 h-6 relative overflow-hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#55B271" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="self-stretch h-11 px-6 py-3.5 bg-[#55B271] rounded-lg inline-flex justify-center items-center gap-3.5">
                        <div className="justify-start text-white text-base font-bold leading-normal">Try GoAudience for free</div>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-gray-700"
                >
                    ×
                </button>
            </div>
        </div>
    );
};

export default Modal; 